import React from 'react';
import { UserContext } from '../../context';
import './Withdraw.css'

export let Withdraw = () => {
    const ctx = React.useContext(UserContext)
    return (
        <h1>Withdraw</h1>
    );
}