import React, { useContext } from 'react'
import { LoginContext } from '../Context/LoginContext'
import { Link } from 'react-router-dom'

const ProtectedLink = ({ to, children }) => {
    const { isAuthenticated } = useContext(LoginContext)
    if (isAuthenticated) return <Link to={to}>{children}</Link>
    return null
}
export default ProtectedLink