import { createContext } from 'react'

export const Context = createContext({
    isLogged: false,
    isLoading: false,
    account: '',
    network: '',
    // web3: {},
    message: ''
})