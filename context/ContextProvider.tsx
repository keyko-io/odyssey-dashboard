import React, { Component } from 'react'
import Web3 from 'web3'
import { Context } from '.'
import { Account } from '@nevermined-io/nevermined-sdk-js'
import { Nevermined } from '@nevermined-io/nevermined-sdk-js'
import { LogLevel } from '@nevermined-io/nevermined-sdk-js/dist/node/utils';
import { Config } from '@nevermined-io/nevermined-sdk-js';
import HDWalletProvider from '@truffle/hdwallet-provider'
const bip39 = require('bip39')

interface ContextProviderProps {}

interface ContextProviderState {
    isLoading: boolean
    nevermined: any
    message: string
    company: string
    accounts: any
    setCompany: (company:string) => void
    packages: any[]
}

export default class ContextProvider extends Component<ContextProviderProps, ContextProviderState> {

    public state = {
        isLoading: true,
        nevermined: {} as any,
        message: 'Connecting...',
        company: 'MSD',
        accounts: {} as any,
        setCompany: (company:string) => {
            this.setState({company})
        },
        packages: [] as any,
        loadPackages: async () => {
            const events = await this.state.nevermined.keeper.provenanceRegistry.contract.getPastEvents("allEvents", {
                fromBlock: 0,
                toBlock: 'latest'
              })
              console.log(events)
              const packagesRequest = await fetch("https://metadata.keyko.rocks/api/v1/metadata/assets", {
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
              })
              const listOfPackages = await packagesRequest.json()
              const packages: any[] = []
              for(const id of listOfPackages.ids){
                const packageData = await fetch("https://metadata.keyko.rocks/api/v1/metadata/assets/ddo/"+id, {
                  headers: {'Accept': 'application/json','Content-Type': 'application/json'}
                })
                const ddo = await packageData.json()
                const pack: any = { name: 'No info', did: '', events: [] }
                if(ddo.service[0].attributes.main.name){
                  pack.name = ddo.service[0].attributes.main.name
                }
                if(ddo.id){
                  pack.did = ddo.id
                }
                for(const event of events){
                  if(
                    event.returnValues._entityDid && event.returnValues._entityDid.substr(2) === ddo.id.substr(7) ||
                    event.returnValues._did && event.returnValues._did.substr(2) === ddo.id.substr(7)
                  ){
                    const obj:any = {
                        event: event.event,
                        returnValues: event.returnValues,
                    }
                    if(event.returnValues._attributes && event.returnValues._attributes.indexOf(",") >= 0){
                        const attributes = event.returnValues._attributes.split(",")
                        obj['company']= attributes[0]
                        obj['lat']= attributes[1]
                        obj['lng']= attributes[2]
                        obj['returnAttributes'] = attributes
                    }
                    if(event.returnValues.activityId){
                        obj.activityId = event.returnValues.activityId
                    }
                    pack.events.push(obj)
                  }
                }
                packages.push(pack)
              }
            console.log(packages)
            this.setState({packages})
        }
    }

    public async componentDidMount() {
        this.bootstrap()
    }

    private bootstrap = async () => {
        const web3Provider = new HDWalletProvider({
            mnemonic: 'taxi music thumb unique chat sand crew more leg another off lamp',
            providerOrUrl: 'https://rinkeby.infura.io/v3/6a91d92ed84f457a9e54f808a60417a1',
            addressIndex: 0,
            numberOfAddresses: 5
        })
        try {
            const nevermined = await Nevermined.getInstance({
                metadataUri: 'http://metadata.keyko.rocks',
                gatewayUri: 'http://gateway.keyko.rocks/',
                nodeUri: `https://rinkeby.infura.io/v3/6a91d92ed84f457a9e54f808a60417a1`,
                gatewayAddress: '0x068Ed00cF0441e4829D9784fCBe7b9e26D4BD8d0',
                web3Provider,
                verbose: LogLevel.Error
            } as Config)
            let msd: Account
            let dhl: Account
            let klm: Account
            let johnDoe: Account
            let customs: Account
            [msd, dhl, klm, johnDoe, customs] = await nevermined.accounts.list()
            this.setState({
                isLoading: false,
                message: '',
                nevermined,
                accounts: {
                    msd,
                    dhl,
                    klm,
                    johnDoe,
                    customs
                }
            })
        } catch (e) {
            // error in bootstrap process
            // show error connecting
            console.log('Error', e)
            this.setState({ isLoading: false })
        }
        this.setState({ isLoading: false })
    }

    public render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}