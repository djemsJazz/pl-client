import React, { useContext } from 'react';
import { LoginContext } from '../Context/LoginContext';

const Home = () => {
  const { user, isAuthenticated } = useContext(LoginContext);
  return (
    <div className="container">
      <h1>Home page</h1>
      {isAuthenticated && user && (
      <div>
        <img src={user.avatar} alt={user.name} />
        <p>
          Name:
          {user.userName}
        </p>
        <p>
          Email:
          {user.email}
        </p>
      </div>
      )}
    </div>
  );
};

export default Home;
