import React from 'react';
import { useState } from 'react';
import { UserContext } from '../../context';
import './CreateAccount.css';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";


export let CreateAccount = () => {
    const [show, setShow] = useState(true);
    const [status, setStatus] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const ctx: any = React.useContext(UserContext);

    const validate = (field: any, label: any) => {
        if (!field) {
            setStatus(`Error: ${label}`);
            setTimeout(() => setStatus(''), 3000);
            console.log(status)
            return false;
        }
        return true;
    }

    const handleCreate = () => {
        console.log(name, email, password);
        if (!validate(name, 'name')) return;
        if (!validate(email, 'email')) return;
        if (!validate(password, 'password')) return;
        ctx.users.forEach((user: any) => {
            user.login = false;
            console.log(ctx);            
        });
        ctx.users.push({name, email, password, balance: 100, login: false})
        setShow(false)
    }

    const clearForm = () => {
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
    }

    const handleRedirect = () => {
        navigate('/login');
    }

    return (
        <div className='card-container'>
            {show ? (
                <Card bg='light' border='secondary'>
                    <Card.Header><h3>Create Account</h3></Card.Header>
                    <Card.Body>
                        <>
                            <h5>Name</h5>
                            <input 
                                type="input" 
                                id='name' 
                                value={name} 
                                onChange={e => setName(e.currentTarget.value)} 
                            />
                            <h5>Email</h5>
                            <input 
                                type="input" 
                                id='email' 
                                value={email} 
                                onChange={e => setEmail(e.currentTarget.value)} 
                            />
                            <h5>Password</h5>
                            <input 
                                type="password" 
                                id='password' 
                                value={password} 
                                onChange={e => setPassword(e.currentTarget.value)} 
                            />
                        </>
                    </Card.Body>
                    <Card.Footer>
                        <Button
                            variant='primary'
                            type='submit'
                            onClick={handleCreate}
                        >
                            Submit
                        </Button>
                    </Card.Footer>
                </Card>
            ):(
                <Card bg='light' border='secondary'>
                    <Card.Header>Create Account</Card.Header>
                    <Card.Body>
                        <h5>Success</h5>
                    </Card.Body>
                    <Card.Footer>
                        <Button
                            variant='primary'
                            type='submit'
                            onClick={handleRedirect}
                        >
                            Log In 
                        </Button>
                    </Card.Footer>
                    <Card.Footer>
                        <Button
                            variant='primary'
                            type='submit'
                            onClick={clearForm}
                        >
                            Add Another Account
                        </Button>
                    </Card.Footer>
                </Card>
            )}                
        </div>
    );
}