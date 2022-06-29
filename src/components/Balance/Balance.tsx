import React from 'react';
import { UserContext } from '../../context';
import './Balance.css';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

export let Balance = () => {
    const ctx = React.useContext(UserContext)
    return (
        <div className="card-container">
            <Card bg='primary'>
                <Card.Header><h3>Balance</h3></Card.Header>
                <Card.Body>
                    <>
                        <h5>Current Balance</h5>
                        <p>$100</p>
                    </>
                </Card.Body>
            </Card>
        </div>
    );
}