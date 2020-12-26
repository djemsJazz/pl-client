import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { LoginContext } from '../Context/LoginContext';

const ProtectedLink = ({ to, children }) => {
  const { isAuthenticated } = useContext(LoginContext);
  if (isAuthenticated) return <Link to={to}>{children}</Link>;
  return null;
};

ProtectedLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default ProtectedLink;
