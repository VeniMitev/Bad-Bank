import React from 'react';
import { useState } from 'react';
import { UserContext } from '../../context';
import './Login.css'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';


export let Login = () => {
    const [show, setShow] = useState(true);

    const ctx: any = React.useContext(UserContext);

    return (
        <div className="card-container">
            {show ? (
                <Card bg='primary'>
                    <Card.Header><h3>Login</h3></Card.Header>
                    <Card.Body>
                        <>
                            <h5>Email</h5>
                            <input type="text" />
                            <h5>Password</h5>
                            <input type="password" />
                        </>
                    </Card.Body>
                    <Card.Footer>
                        <Button
                            variant='light'
                            type='submit'
                        >
                            Submit
                        </Button>
                    </Card.Footer>
                </Card>
            ):(
                <Card bg='primary'>
                    <Card.Header>Login</Card.Header>
                    <Card.Body>
                        <h5>Success</h5>
                    </Card.Body>
                    <Card.Footer>
                        <Button
                            variant='light'
                            type='submit'
                        >
                            Login with Another Account
                        </Button>
                    </Card.Footer>
                </Card>
            )} 
        </div>
    );
}

