import React from 'react';
import { UserContext } from '../../context';
import { useState, useEffect } from "react";
import './AllData.css';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';

export let AllData = () => {
    const ctx: any = React.useContext(UserContext);
    const [userAccounts, SetUserAccounts] = useState(
        ctx.users.map(({
            name, 
            email, 
            password, 
            balance,
            login
        }:{ 
            name: string; 
            email: string;
            password: string; 
            balance: number;
            login: boolean
        }, index: number) => {
            return <tr key={index + 1}>
                <th>{index + 1}</th>
                <th>{name}</th>
                <th>{email}</th>
                <th>{password}</th>
                <th>${balance}</th>
                <th>{login ? 'Yes' : 'No'}</th>
            </tr>
        }));

    const handleLogout = () => {
        ctx.users.forEach((user: any) => {
            user.login = false;       
        })
        SetUserAccounts(
            ctx.users.map(({
                name, 
                email, 
                password, 
                balance,
                login
            }:{ 
                name: string; 
                email: string;
                password: string; 
                balance: number;
                login: boolean
            }, index: number) => {
                return <tr key={index + 1}>
                    <th>{index + 1}</th>
                    <th>{name}</th>
                    <th>{email}</th>
                    <th>{password}</th>
                    <th>${balance}</th>
                    <th>{login ? 'Yes' : 'No'}</th>
                </tr>
            }))
    }

    return (
        <div className='alldata-table'>
            <h1>AllData</h1>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Balance</th>
                        <th>Logged In</th>
                    </tr>
                </thead>
                <tbody>
                    {userAccounts}
                </tbody>
            </Table>
            <Button onClick={handleLogout}>Logout All Users</Button>
        </div>        
    );
}