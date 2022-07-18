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
        {
          name: 'John Doe',
          email: 'john@mit.edu',
          password: 'secret',
          balance: 101,
          history: [
            {
              transactionType: 'withdraw',
              transactionAmount: 20,
              newBalance: 81  
            },
            {
              transactionType: 'deposit',
              transactionAmount: 20,
              newBalance: 101  
            }
          ],
          login: false
        },
        {
          name: 'Jane Doe',
          email: 'jane@mit.edu',
          password: 'mystery',
          balance: 101,
          history: [
            {
              transactionType: 'withdraw',
              transactionAmount: 20,
              newBalance: 81  
            },
            {
              transactionType: 'deposit',
              transactionAmount: 20,
              newBalance: 101  
            }
          ],
          login: false
        }
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
