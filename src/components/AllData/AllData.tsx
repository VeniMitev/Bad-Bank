import React from 'react';
import { UserContext } from '../../context';
import { useState } from "react";
import './AllData.css';
import { Button, Accordion } from 'react-bootstrap';

export let AllData = () => {
    const ctx: any = React.useContext(UserContext);
    const user = ctx.users.map(({
        name,
        email,
        password,
        balance,
        history,
        login
    }:{ 
        name: string; 
        email: string;
        password: string; 
        balance: number;
        history: [];
        login: boolean
    }, i: any) => {
        let transactionHistory = history.map(({
            transactionType,
            transactionAmount,
            newBalance
        }:{
            transactionType: string;
            transactionAmount: number;
            newBalance: number
        }, i: any) => {
            return (
                <li key={i}>
                    {transactionType === 'deposit' ? 'Deposit' : 'Withdraw'}: ${transactionAmount} | New Balance: ${newBalance}
                </li>
            )
        })

        return (
            <Accordion.Item eventKey={i}>
                <Accordion.Header>
                    <h5 style={login ? {color: 'green'} : {}}>
                        {login ? 'Current User' : ''}
                        {login ? <hr /> : ''}
                        User: {name} | email: {email} | password: {password} | Click for transaction history
                    </h5>
                </Accordion.Header>
                <Accordion.Body>
                    <>
                        <h6>Current Balance: ${balance}</h6>
                        <p>Transaction History: </p>
                        <ol>{transactionHistory}</ol>
                    </>
                </Accordion.Body>
            </Accordion.Item>
        )
    })

    const [accounts, setAccounts] = useState(user);

    const handleLogout = () => {
        ctx.users.forEach((user: any) => {
            user.login = false;       
        })
        setAccounts(user)
    }

    return (
        <div className='alldata-table'>
            <h1>AllData</h1>            
            <Accordion defaultActiveKey="0">
                {accounts}
            </Accordion>
            {ctx ? <Button onClick={handleLogout}>Logout All Users</Button> : ''}
        </div>        
    );
}