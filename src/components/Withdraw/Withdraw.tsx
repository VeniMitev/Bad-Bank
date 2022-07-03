import React from 'react';
import { useState, useEffect } from 'react';
import { UserContext } from '../../context';
import './Withdraw.css'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

export let Withdraw = () => {
    const [activeUser, setActiveUser] = useState({balance:0});
    const [withdraw, setWithdraw] = useState(0)

    const ctx: any = React.useContext(UserContext);

    const user = ctx.users.filter(({login}:{login: boolean}) => {
        return login === true;
    });

    useEffect(() =>{
        setActiveUser(user[0])
        console.log(activeUser)
        
    }, [activeUser, user]);

    const handleWithdraw = () => {
        activeUser.balance -= withdraw
        console.log(activeUser.balance)
    }

    return (
        <div className="card-container">
            <Card bg='primary'>
                <Card.Header><h3>Withdraw</h3></Card.Header>
                <Card.Body>
                    <>
                        <h5>Withdraw Amount</h5>
                        <input 
                            type='number'
                            id='withdraw'
                            value={withdraw} 
                            onChange={e => setWithdraw(Number(e.currentTarget.value))}                     
                        />
                    </>
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
            </Card>
        </div>
    );
}