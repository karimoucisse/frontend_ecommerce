import { createContext, useState } from "react";
import { useEffect } from "react";

const UserContext = createContext({})

const UserContextProvider = props => {
    const [user, setUser] = useState()

    const API = "http://localhost:5000/auth/me"

    const value = {
        user: user,
        setUser: setUser
    }

    useEffect(() => {
        getUser() 
    },[])

    const getUser = async () => {
        const response = await fetch(`${API}`, {
            credentials: 'include',
        })

        const data = await response.json()
        if(!data.error) {
            setUser(data)
        }
    }

    return (
        <UserContext.Provider value = {value}>
            {props.children}
        </UserContext.Provider>
    )

}

export {
    UserContextProvider,
    UserContext
}