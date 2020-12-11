import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const updateTheUserName = (newUser) => {
    setUser(newUser);
  };

  return (
    <LoginContext.Provider value={{
      user, setIsAuthenticated, setUser, isAuthenticated, updateTheUserName,
    }}
    >
      {children}
    </LoginContext.Provider>
  );
};

LoginProvider.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default LoginProvider;
