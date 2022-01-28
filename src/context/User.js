import { createContext, useState } from "react";

const UserContext = createContext({})

const UserContextProvider = props => {
    const [user, setUser] = useState()
    
    const value = {
        user: user,
        setUser: setUser
    }
    return (
        <UsersConnectContext.Provider value = {value}>
            {props.children}
        </UsersConnectContext.Provider>
    )

}

export {
    UserContextProvider,
    UserContext
}