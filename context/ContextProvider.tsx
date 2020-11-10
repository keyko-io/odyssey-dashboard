import React, { Component } from 'react'
import Web3 from 'web3'
import { Context } from '.'
// import HDWalletProvider from '@truffle/hdwallet-provider'
const bip39 = require('bip39')

interface ContextProviderProps {}

interface ContextProviderState {
    isLogged: boolean
    isLoading: boolean
    account: string
    network: string
    tokenContract: any
    web3: Web3
    message: string
}

export default class ContextProvider extends Component<ContextProviderProps, ContextProviderState> {

    public state = {
        isLogged: false,
        isLoading: true,
        account: '',
        network: '',
        tokenContract: null,
        web3: {} as any,
        message: 'Connecting...'
    }

    public async componentDidMount() {
        this.bootstrap()
    }

    public isLogged() {
        if (localStorage.getItem('seedphrase') !== null) {
            return true
        }
        return false
    }

    private bootstrap = async () => {
        /*
        let mnemonic
        if (this.isLogged()) {
            mnemonic = localStorage.getItem('seedphrase')
        } else {
            mnemonic = bip39.generateMnemonic()
            localStorage.setItem('seedphrase', mnemonic)
        }
        localStorage.setItem('logType', 'BurnerWallet')
        // const provider = new HDWalletProvider(mnemonic, 'http://localhost:8545', 0, 1)
        const provider = new HDWalletProvider('actual renew label term slender day around member obtain toss fantasy link', 'http://localhost:8545', 0, 1)
        const web3 = new Web3(provider as any)
        try {
            const accounts = await web3.eth.getAccounts()
            const account = accounts[0]
            const balance = await web3.eth.getBalance(accounts[0])
            this.setState({
                isLoading: false,
                message: '',
                account,
                web3
            })
            console.log(account, balance)
            
        } catch (e) {
            // error in bootstrap process
            // show error connecting
            console.log('Error', e)
            this.setState({ isLoading: false })
        }
        */
    }

    public render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}