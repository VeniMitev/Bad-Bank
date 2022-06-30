import React from 'react';
import { useState, useEffect } from 'react';
import { UserContext } from '../../context';
import './Balance.css';
import Card from 'react-bootstrap/Card';

export let Balance = () => {
    const [activeUser, setActiveUser] = useState({balance:0});

    const ctx: any = React.useContext(UserContext);

    const user = ctx.users.filter(({login}:{login: boolean}) => {
        return login === true;
    });

    useEffect(() =>{
        setActiveUser(user[0])
        console.log(activeUser)
    }, [activeUser]);

    return (
        <div className="card-container">
            <Card bg='primary'>
                <Card.Header><h3>Balance</h3></Card.Header>
                <Card.Body>
                    <>
                        <h5>Current Balance</h5>
                        <p>{activeUser.balance}</p>
                    </>
                </Card.Body>
            </Card>
        </div>
    );
}