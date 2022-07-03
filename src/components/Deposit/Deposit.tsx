import React from 'react';
import { useState, useEffect } from 'react';
import { UserContext } from '../../context';
import './Deposit.css'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

export let Deposit = () => {
    const [activeUser, setActiveUser] = useState({balance:0});
    const [deposit, setDeposit] = useState(0)

    const ctx: any = React.useContext(UserContext);

    const user = ctx.users.filter(({login}:{login: boolean}) => {
        return login === true;
    });

    useEffect(() =>{
        setActiveUser(user[0])
        console.log(activeUser)
        
    }, [activeUser, user]);

    const handleDeposit = () => {
        activeUser.balance += deposit
        console.log(activeUser.balance)
    }

    return (
        <div className="card-container">
            <Card bg='primary'>
                <Card.Header><h3>Deposit</h3></Card.Header>
                <Card.Body>
                    <>
                        <h5>Deposit Amount</h5>
                        <input 
                            type='number'
                            id='deposit'
                            value={deposit} 
                            onChange={e => setDeposit(Number(e.currentTarget.value))}                     
                        />
                    </>
                </Card.Body>
                <Card.Footer>
                    <Button
                        variant='light'
                        type='submit'
                        onClick={handleDeposit}
                    >
                        Deposit
                    </Button>
                </Card.Footer>
            </Card>
        </div>
    );
}