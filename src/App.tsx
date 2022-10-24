import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import { Home } from './components/Home/Home';
import { CreateAccount } from './components/CreateAccount/CreateAccount';
import { Login } from './components/Login/Login';
import { Deposit } from './components/ManageAccount/Deposit';
import { Withdraw } from './components/ManageAccount/Withdraw';
import { AllData } from './components/AllData/AllData';
import { NavBar } from './components/NavBar/NavBar';
import { AppShell } from '@mantine/core';

function App() {
  return (
    <div className='app'>
        {/* <NavBar /> */}
        

        <AppShell navbar={<NavBar />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create-account' element={<CreateAccount />} />
            <Route path='/login' element={<Login />} />
            <Route path='/deposit' element={<Deposit />} />
            <Route path='/withdraw' element={<Withdraw />} />
            <Route path='/alldata' element={<AllData />} />
          </Routes>
        </AppShell>
    </div>
  );
}

export default App;
