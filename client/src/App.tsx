import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar/Navbar';
import Cards from './components/Cards/Card';
// import UserCard from './components/UserCard/userCard';

import { DAppProvider , ChainId } from '@usedapp/core';


function App() {
  return (
    <DAppProvider config ={{
      supportedChains: [ChainId.Kovan]
    }}>
      <div>
        <NavBar />
        <Cards /> 
        {/* <Cards /> 
        <UserCard /> */}
      </div>
    </DAppProvider>
  );
}

export default App;
