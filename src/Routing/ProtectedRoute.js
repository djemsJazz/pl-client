import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { LoginContext } from '../Context/LoginContext';

const ProtectedRoute = ({ component, path, ...rest }) => {
  const { isAuthenticated } = useContext(LoginContext);
  if (isAuthenticated) {
    return (<Route path={path} component={component} {...rest} />);
  }
  return (<Redirect to={{ pathname: '/' }} />);
};

export default ProtectedRoute;
