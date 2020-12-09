import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import LoginProvider from './Context/LoginContext';
import MainRouter from './Routing/MainRouter';

const App = () => (
  <LoginProvider>
    <MainRouter />
  </LoginProvider>
);

export default App;
