import {createContext} from 'react'

const AutContext = createContext({
    auth: undefined,
    login: ()=> null,
    logout: ()=> null,
})

export default AutContext;