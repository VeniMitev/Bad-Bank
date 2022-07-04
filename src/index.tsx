import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { UserContext } from './context';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <UserContext.Provider value={
    {
      users:[
        {name: 'veni', email: 'veni@mit.edu', password: '123',balance: 100, login: true},
        {name: 'test', email: 'test@mit.edu', password: '123',balance: 100, login: false} 
      ]
    }
  }>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </UserContext.Provider>

);
