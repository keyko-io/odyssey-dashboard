import { createContext } from 'react'
import { Account } from '@nevermined-io/nevermined-sdk-js'

export const Context = createContext({
    isLoading: false,
    nevermined: null,
    message: '',
    company: 'MSD',
    setCompany: (company: string) => {},
    accounts: [] as any
})