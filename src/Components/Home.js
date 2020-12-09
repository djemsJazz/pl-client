import React, { useContext } from 'react';
import { LoginContext } from '../Context/LoginContext'
import { Button } from 'semantic-ui-react';
import { apiFetch } from './utils';

const Home = () => {
  const { user, isAuthenticated } = useContext(LoginContext)
  const getUsers = async () => {
    try {
      const response = await apiFetch({ url: '/users' })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='container'>
      <h1>Home page</h1>
      {isAuthenticated && user && <div>
        <img src={user.avatar} alt={user.name} />
        <p>Name: {user.userName}</p>
        <p>Email: {user.email}</p>
      </div>}
      <Button onClick={getUsers}>Fetch</Button>
    </div>
  );
}

export default Home;
