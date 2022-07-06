import React from 'react';
import { UserContext } from '../../context';
import './Home.css'

export let Home = () => {
    const ctx = React.useContext(UserContext)
    return (
        <h1>Welcome to Your Bad Bank!!</h1>
    );
}