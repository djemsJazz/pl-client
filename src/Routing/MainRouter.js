import React, { useContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LoginContext } from '../Context/LoginContext';
import Home from '../Components/Home';
import Profile from '../Components/Profile';
import Details from '../Components/Details';
import NavBar from './Nav';
import ProtectedRoute from './ProtectedRoute';
import { getCurrentUser } from '../ApiRequests/User';

const MainRouter = () => {
  const { setUser, setIsAuthenticated } = useContext(LoginContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCurrentUser((data) => {
      setUser(data);
      setIsAuthenticated(true);
    }, () => {
      setIsAuthenticated(false);
      setUser(null);
    });
    setLoading(false);
  }, [setUser, setIsAuthenticated]);

  if (loading) return <h1>Chargement...</h1>;
  return (
    <Router>
      <>
        <NavBar />
        <Switch>
          <Route path="/" component={Home} exact />
          <ProtectedRoute path="/profile" component={Profile} exact />
          <ProtectedRoute path="/details" component={Details} exact />
        </Switch>
      </>
    </Router>
  );
};
export default MainRouter;
