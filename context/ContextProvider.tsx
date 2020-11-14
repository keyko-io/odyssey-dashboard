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