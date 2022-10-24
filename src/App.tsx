import { Routes, Route } from "react-router-dom";
import './App.css';
import { Home } from './components/Home';
import { CreateAccount } from './components/CreateAccount';
import { Login } from './components/Login';
import { Deposit } from './components/Deposit';
import { Withdraw } from './components/Withdraw';
import { AllData } from './components/AllData';
import { NavBar } from './components/NavBar';
import { AppShell } from '@mantine/core';
import { FooterComponent } from "./components/Footer";

function App() {
  return (
    <AppShell 
      navbar={ <NavBar /> } 
      footer={ <FooterComponent /> }
      style={{backgroundColor: 'rgba(218, 223, 238, 0.769)'}}      
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
