import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LoginContext } from '../Context/LoginContext';

const ProtectedLink = ({ to, children }) => {
  const { isAuthenticated } = useContext(LoginContext);
  if (isAuthenticated) return <Link to={to}>{children}</Link>;
  return null;
};
export default ProtectedLink;
