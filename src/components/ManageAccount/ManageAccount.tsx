import React from 'react';
import { useState, useEffect } from 'react';
import { UserContext } from '../../context';
import './ManageAccount.css';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

export const ManageAccount = () => {
    const ctx: any = React.useContext(UserContext);
    const user = ctx.users.find(({login}:{login: boolean}) => {
        return login === true;
    });

    const [activeUser, setActiveUser] = useState(user);
    const [withdraw, setWithdraw] = useState(0);
    const [balance, setBalance] = useState(user);
    const [deposit, setDeposit] = useState(0);
    const navigate = useNavigate();

    const balanceStyle = {
        fontSize: '2rem'
    }

    useEffect(() =>{
        if (!balance) return;
        if (!activeUser) return;
        setActiveUser(user);        
        setBalance(user.balance);
    }, [activeUser, user, balance]);

    const handleDeposit = () => {
        let newBalance = user.balance += deposit;
        setBalance(newBalance);
        setDeposit(0);
    }

    const handleWithdraw = () => {
        if (withdraw > balance) return;
        let newBalance = user.balance -= withdraw;
        setBalance(newBalance);
        setWithdraw(0);
    }

    const handleRedirectLogin = () => {
        navigate('/login');
    }

    const handleRedirectCreate = () => {
        navigate('/create-account');
    }
 
    return(
        <>
            {activeUser ? (
                <div className="card-container">
                <Card bg='light' border='secondary'>
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
                            variant='primary'
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
                                    variant='primary'
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
                            <p style={balanceStyle}>{activeUser ? `$${balance}` : `Login to display Information`}</p>
                        </>
                    </Card.Body>
                </Card>
            </div>
            ) : (
                <div className="card-container">
                    <Card bg='light' border='secondary' >
                        <Card.Body >
                            <h5>Login or Create Account First</h5>                        
                        </Card.Body>
                        <Card.Footer>
                            <Button
                                variant='primary'
                                onClick={handleRedirectLogin}
                            >
                              Log In
                            </Button>
                        </Card.Footer>
                        <Card.Footer>
                            <Button
                                variant='primary'
                                onClick={handleRedirectCreate}
                            >
                              Create Account
                            </Button>
                        </Card.Footer>
                    </Card>
                </div>
            )}
        </>
    )
}
