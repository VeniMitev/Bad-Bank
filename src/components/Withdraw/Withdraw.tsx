import React from 'react';
import { UserContext } from '../../context';
import './Withdraw.css';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

export let Withdraw = () => {
    const ctx = React.useContext(UserContext)
    return (
        <div className="card-container">
            <Card bg='primary'>
                <Card.Header><h3>Withdraw</h3></Card.Header>
                <Card.Body>
                    <>
                        <h5>Withdraw Amount</h5>
                        <input type="number" />
                    </>
                </Card.Body>
                <Card.Footer>
                    <Button
                        variant='light'
                        type='submit'
                    >
                        Withdraw
                    </Button>
                </Card.Footer>
            </Card>
        </div>
    );
}