import React from 'react';
import { UserContext } from '../../context';
import './Home.css'

export let Home = () => {
    const ctx = React.useContext(UserContext)
    return (
        <h1>Home</h1>
    );
}