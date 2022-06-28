import React from 'react';
import { useState } from 'react';
import { UserContext } from '../../context';
import './CreateAccount.css'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';


export let CreateAccount = () => {
    const [show, setShow] = useState(true);
    const [status, setStatus] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
        ctx.users.push({name, email, password, balance: 100})
        setShow(false)
    }

    const clearForm = () => {
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
    }


    return (
        <div className='card-container'>
            <Card bg='primary'>
                <Card.Header>Login</Card.Header>
                <Card.Body>
                    {show ? (
                        <>
                            <h4>Name</h4>
                            <input 
                                type="input" 
                                id='name' 
                                value={name} 
                                onChange={e => setName(e.currentTarget.value)} 
                            />
                            <h4>Email</h4>
                            <input 
                                type="input" 
                                id='email' 
                                value={email} 
                                onChange={e => setEmail(e.currentTarget.value)} 
                            />
                            <h4>Password</h4>
                            <input 
                                type="password" 
                                id='password' 
                                value={password} 
                                onChange={e => setPassword(e.currentTarget.value)} 
                            />
                            <br />
                            <button type='submit' className='btn btn-light' onClick={handleCreate}>
                                Create Account
                            </button>
                        </>
                    ):(
                        <>
                            <h4>Success</h4>
                            <button 
                                type='submit' 
                                className='btn btn-light'
                                onClick={clearForm}
                            >
                                Add Another Account</button>
                        </>
                    )}
                </Card.Body>
            </Card>
        </div>

    );
}