import React from 'react';
import { UserContext } from '../../context';
import './Deposit.css'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

export let Deposit = () => {
    const ctx = React.useContext(UserContext);

    return (
        <div className="card-container">
            <Card bg='primary'>
                <Card.Header><h3>Deposit</h3></Card.Header>
                <Card.Body>
                    <>
                        <h5>Deposit Amount</h5>
                        <input type="number" />
                    </>
                </Card.Body>
                <Card.Footer>
                    <Button
                        variant='light'
                        type='submit'
                    >
                        Deposit
                    </Button>
                </Card.Footer>
            </Card>
        </div>
    );
}