import React from 'react';
import { UserContext } from '../../context';
import { useState, useEffect } from "react";
import './AllData.css';
import { Accordion } from 'react-bootstrap';

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
            let style: object;
            if (transactionType === 'deposit') {
                style = {color: 'green'} 
            } else {
                style = {color: 'red'}
            }
            return (
                <li key={i}>
                    <p style={style}>
                        {transactionType === 'deposit' ? 'Deposit' : 'Withdraw'}: ${transactionAmount} | New Balance: ${newBalance}
                    </p>
                </li>
            )
        })

        return (
            <Accordion.Item eventKey={i}>
                <Accordion.Header>
                    <h5 style={login ? {color: 'green'} : {}}>
                        {login ? 'Current User' : ''}
                        {login ? <hr /> : ''}
                        User: {name} | Click for Account Information!
                    </h5>
                </Accordion.Header>
                <Accordion.Body>
                    <>
                        <h6>Email: {email}</h6>
                        <h6>Password: {password}</h6>
                        <h6>Current Balance: ${balance}</h6>
                        <p>Transaction History: </p>
                        <ol>{transactionHistory}</ol>
                    </>
                </Accordion.Body>
            </Accordion.Item>
        )
    })

    const [accounts, setAccounts] = useState(user);

    useEffect(() => {
        setAccounts(user)
    }, [user])

    return (
        <div className='alldata-table'>
            <h1>AllData</h1>            
            <Accordion defaultActiveKey="0">
                {accounts}
            </Accordion>
        </div>        
    );
}