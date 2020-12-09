import React, { useState, createContext } from 'react'

export const LoginContext = createContext()

const LoginProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState(null)

    const updateTheUserName = (user) => {
        setUser(user)
    }
    
    return (
        <LoginContext.Provider value={{ user, setIsAuthenticated, setUser, isAuthenticated, updateTheUserName }}>
            {children}
        </LoginContext.Provider>
    )
}
export default LoginProvider





