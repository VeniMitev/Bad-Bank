import React from 'react';
import { UserContext } from '../../context';
import './Balance.css'

export let Balance = () => {
    const ctx = React.useContext(UserContext)
    return (
        <h1>Balance</h1>
    );
}