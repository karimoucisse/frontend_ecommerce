import { createContext, useState } from "react";

const UserContext = createContext({})

const UserContextProvider = props => {
    const [user, setUser] = useState()

    const value = {
        user: user,
        setUser: setUser
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