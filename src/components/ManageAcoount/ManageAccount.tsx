import React from 'react';
import { useState, useEffect } from 'react';
import { UserContext } from '../../context';
import Card from 'react-bootstrap/Card';
import './ManageAccount.css'
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

export const ManageAccount = () => {
    const [activeUser, setActiveUser] = useState(null);
    const [withdraw, setWithdraw] = useState(0);
    const [balance, setBalance] = useState(0);
    const [deposit, setDeposit] = useState(0);
    const ctx: any = React.useContext(UserContext);
    const navigate = useNavigate();

    const user = ctx.users.find(({login}:{login: boolean}) => {
        return login === true;
    });

    useEffect(() =>{
        if (!balance) return;
        setActiveUser(user);
        setBalance(user.balance);
        if (!activeUser) return;
    }, [activeUser, user, balance]);

    const handleDeposit = () => {
        setBalance(user.balance += deposit);
        setDeposit(0);
    }

    const handleWithdraw = () => {
        setBalance(user.balance -= withdraw);
        setWithdraw(0);
    }

    const handleRedirect = () => {
        navigate('/login');
    }
 
    return(
        <>
            {activeUser ? (
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
                                min='0'
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
                    <hr />
                    <Card.Header><h3>Withdraw</h3></Card.Header>
                    {balance ? (
                        <>
                            <Card.Body>
                                <h5>Withdraw Amount</h5>
                                <input 
                                    type='number'
                                    id='withdraw'
                                    value={withdraw} 
                                    min='0'
                                    max={balance}
                                    onChange={e => setWithdraw(Number(e.currentTarget.value))}                     
                                />
                            </Card.Body>
                            <Card.Footer>
                                <Button
                                    variant='light'
                                    type='submit'
                                    onClick={handleWithdraw}
                                >
                                    Withdraw
                                </Button>
                            </Card.Footer>
                        </>
                    ) : (
                        <Card.Body >
                            <h5>Withdraw Amount</h5>
                            <p>Balance is currently $0<br/>Put some cash in!!!</p>
                        </Card.Body>
                    )}
                    <hr />
                    <Card.Header><h3>Balance</h3></Card.Header>
                    <Card.Body>
                        <>
                            <h5>Current Balance</h5>
                            <p>{activeUser ? `$${balance}` : `Login to display Information`}</p>
                        </>
                    </Card.Body>
                </Card>
            </div>
            ) : (
                <div className="card-container">
                    <Card bg='primary' >
                        <Card.Body >
                            <h5>Login First</h5>                        
                        </Card.Body>
                        <Card.Footer>
                            <Button
                                variant='light'
                                onClick={handleRedirect}
                            >
                              Go To Login
                            </Button>
                        </Card.Footer>
                    </Card>
                </div>
            )}
        </>
    )
}
