import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import GoogleLogin from 'react-google-login';
import { LoginContext } from '../Context/LoginContext';
import ProtectedLink from './ProtectedLink';
import { login } from '../ApiRequests/User';

const NavBar = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(LoginContext);

  const googleLoginSucCb = (response) => {
    const { tokenId: idToken } = response;
    login(idToken, ({ user, token }) => {
      localStorage.setItem('token', token);
      setUser(user);
      setIsAuthenticated(true);
    }, () => {
      setIsAuthenticated(false);
      setUser(null);
    });
  };

  const googleLoginFailCb = (response) => {
    console.log('prob', response);
    setUser(null);
    setIsAuthenticated(false);
  };
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUser(null);
  };
  return (
    <nav className="navBar">
      <div className="container">
        <div>
          <Link to="/">Home</Link>
          <ProtectedLink to="/profile">Profile</ProtectedLink>
          <ProtectedLink to="/details">Details</ProtectedLink>
        </div>
        <div>
          {isAuthenticated && <Button size="mini" inverted onClick={handleLogout}>Logout</Button>}

          {!isAuthenticated && (
          <GoogleLogin
            clientId="950300558921-v0hvpv7gip2l7id0meges0vspnatlaj9.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={googleLoginSucCb}
            onFailure={googleLoginFailCb}
            cookiePolicy="single_host_origin"
          />
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
