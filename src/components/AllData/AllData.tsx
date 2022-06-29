import React from 'react';
import { UserContext } from '../../context';
import './AllData.css';
import Table from 'react-bootstrap/Table';

export let AllData = () => {
    const ctx: any = React.useContext(UserContext);

    const account = ctx.users.map(({
        name, 
        email, 
        password, 
        balance,
    }:{ 
        name: string; 
        email: string;
        password: string; 
        balance: number;
    }, index: number) => {
        return <tr>
            <th>{index + 1}</th>
            <th>{name}</th>
            <th>{email}</th>
            <th>{password}</th>
            <th>{balance}</th>
        </tr>
    });

    return (
        <div className='alldata-table'>
            <h1>AllData</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {account}
                </tbody>
            </Table>
        </div>
        
    );
}