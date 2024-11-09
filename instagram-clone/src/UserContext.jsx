// this is going to be used to store the users username

import { createContext, useState, useContext } from "react";

const UserContext = createContext()
// creating the context

export const useUser = () => {
    return useContext(UserContext)
}
// create custom hook to use the UserContext


// create a provider component
export const UserProvider = ({ children }) => {
    const [username, setUsername] = useState('')

    return(
        <UserContext.Provider value={{ username, setUsername }}>
            {children}
        </UserContext.Provider>
    )
}