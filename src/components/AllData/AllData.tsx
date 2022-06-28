import React from 'react';
import { UserContext } from '../../context';
import './AllData.css'

export let AllData = () => {
    const ctx = React.useContext(UserContext)
    return (
        <>
            <h1>AllData</h1>
            <p>{JSON.stringify(ctx)}</p>
        </>
        
    );
}