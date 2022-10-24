import { Routes, Route } from "react-router-dom";
import './App.css';
import { Home } from './components/Home';
import { CreateAccount } from './components/CreateAccount';
import { Login } from './components/Login';
import { Deposit } from './components/Deposit';
import { Withdraw } from './components/Withdraw';
import { AllData } from './components/AllData';
import { NavBar } from './components/NavBar';
import { AppShell, Footer, Group } from '@mantine/core';
import { Copyright } from 'tabler-icons-react';

function App() {
  return (
    <AppShell 
      navbar={<NavBar />} 
      style={{backgroundColor: 'rgba(218, 223, 238, 0.769)'}}
      footer={
        <Footer height={40} p='xs'>
          
          <Group>
            <Copyright 
              size={15}
              strokeWidth={2}
              color={'black'}
            />
            <span> Veni Mitev 2022</span>
            <a href="https://venimitev.dev">venimitev.dev</a>
            <a href="https://github.com/VeniMitev/Bad-Bank">github repo for this project</a>
          </Group>
          
        </Footer>
      }
    >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create-account' element={<CreateAccount />} />
        <Route path='/login' element={<Login />} />
        <Route path='/deposit' element={<Deposit />} />
        <Route path='/withdraw' element={<Withdraw />} />
        <Route path='/alldata' element={<AllData />} />
      </Routes>
    </AppShell>
  );
}

export default App;
