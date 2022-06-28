import React from 'react';
import { UserContext } from '../../context';
import './Deposit.css'

export let Deposit = () => {
    const ctx = React.useContext(UserContext)
    return (
        <h1>Deposit</h1>
    );
}