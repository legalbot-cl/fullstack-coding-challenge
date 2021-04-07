import {createContext, useContext, useState} from 'react'
import axios from 'axios'

const authContext = createContext()
const api = axios.create({
    baseURL: process.env.API_URL || `http://localhost:4000/v1`
})



export function ProvideAuth({ children }) {
    const auth = useProvideAuth()
  
    return (<authContext.Provider value={auth}>{children}</authContext.Provider>)
}



export const useAuth = () => {
    return useContext(authContext)
}



function useProvideAuth() {
    const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'))

    const signin = user => {
        api.post('/user/login', user)
        .then(res => {
            setAuthToken(res.data.token)
            localStorage.setItem('authToken', res.data.token)    
        })
        .catch(console.log)
    }
       
    
    const signup = (user, successCb, errorCb) => {
        api.post('/user/signup', user)
        .then(successCb)
        .catch(errorCb)
    }   
    
    
    const signout = cb => {
        setAuthToken(null)
        localStorage.removeItem('authToken')
        cb()
    }


    return {
        authToken,
        signin,
        signup,
        signout,
    }
}