import { createContext, useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const UserContext = createContext({})

const UserContextProvider = props => {
    const [user, setUser] = useState(null)
    const location = useLocation()



    const API = "http://localhost:5000/auth/me"

    
    useEffect(() => {
        getUser() 
    },[])

    useEffect(() => {
        window.scrollTo(0,0)
    }, [location])
    
    const getUser = async () => {
        const response = await fetch(`${API}`, {
            credentials: 'include',
        })
        
        const data = await response.json()
        if(!data.error) {
            setUser(data)
        }
    }
    
    const value = {
        user: user,
        setUser: setUser,
        getUser
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