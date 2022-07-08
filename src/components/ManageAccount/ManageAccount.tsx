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
    const [successWithdraw, setSuccessWithdraw] = useState('');
    const [successDeposit, setSuccessDeposit] = useState('');
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
        const userHistory = user.history;
        let newBalance = user.balance += deposit;
        let date = new Date();
        let transactionDate = `${date.getHours}:${date.getMinutes} at ${date.getDay}/${date.getMonth}/${date.getFullYear}`

        userHistory.push({
            transactionType: 'deposit',
            transactionAmount: deposit,
            newBalance,
            transactionDate
        });

        setBalance(newBalance);
        setSuccessDeposit('Succesful Transaction');
        setSuccessWithdraw('');
        setDeposit(0);
    }

    const handleWithdraw = () => {

        const userHistory = user.history;

        let newBalance = user.balance -= withdraw;

        userHistory.push({
            transactionType: 'withdraw',
            transactionAmount: withdraw,
            newBalance            
        });

        setBalance(newBalance);
        setSuccessWithdraw('Succesful Transaction');   
        setSuccessDeposit('');     
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
                            <h5>Deposit Amount</h5>
                            <input 
                                type='number'
                                id='deposit'
                                value={deposit} 
                                min='0'
                                onChange={e => setDeposit(Number(e.currentTarget.value))}                     
                            />
                            <p style={{color: 'green'}}>{!deposit ? successDeposit : ''}</p>
                    </Card.Body>
                    <Card.Footer>
                        <Button
                            variant='primary'
                            type='submit'
                            onClick={handleDeposit}
                            disabled={!deposit ? true : false}
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
                                <p style={{color: 'green'}}>{withdraw > balance || withdraw  ? '' : successWithdraw}</p>
                                <p style={{color: 'red'}}>{withdraw > balance ? 'Amount Higher than Balance' : ''}</p>                               
                            </Card.Body>
                            <Card.Footer>
                                <Button
                                    variant='primary'
                                    type='submit'
                                    onClick={handleWithdraw}
                                    disabled={withdraw > balance || !withdraw ? true : false}
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
