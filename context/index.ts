import { createContext } from 'react'

export const Context = createContext({
    isLoading: false,
    nevermined: null,
    message: '',
    company: 'MSD',
    setCompany: (company: string) => {}
})