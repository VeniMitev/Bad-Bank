import React from 'react';
import { useState, useEffect } from 'react';
import { UserContext } from '../../context';
import './Login.css'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';


export let Login = () => {
    const [show, setShow] = useState(true);
    const [status, setStatus] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [activeUser, setActiveUser] = useState({name: '', login: false});

    const ctx: any = React.useContext(UserContext);

    const validate = (field: any, label: any) => {
        if (!field) {
            setStatus(`Error: ${label}`);
            setTimeout(() => setStatus(''), 3000);
            console.log(status)
            return false;
        } else {
            const user = ctx.users.filter(({email, password}:{email: string; password:string}) => {
                return loginEmail === email && loginPassword === password;
            });

            if (user[0] === undefined) {
                setStatus(`Error: ${label}`);
                setTimeout(() => setStatus(''), 3000);
                console.log(status)
                return false
            }
        }
        return true;
    }

    const handleLogin = () => {
        ctx.users.forEach((user: any) => {
            user.login = false;           
        })
        if (!validate(loginEmail, 'email')) return;
        if (!validate(loginPassword, 'password')) return;

        const user = ctx.users.filter(({email, password}:{email: string; password:string}) => {
            return loginEmail === email && loginPassword === password;
        });

        setActiveUser(user[0]);
        setShow(false);
    }

    useEffect(() =>{
        activeUser.login = true;
    }, [activeUser, ctx.users]);

    const handleLogout = () => {
        setLoginEmail('')
        setLoginPassword('')
        setShow(true);
        setActiveUser({name: '', login: false})
        // activeUser.login = false;

        ctx.users.forEach((user: any) => {
            user.login = false;
            console.log(ctx);            
        })
    }

    const callLog = () => {
        console.log(ctx.users)
        console.log(activeUser)
    }

    return (
        <div className="card-container">
            {show ? (
                <Card bg='primary'>
                    <Card.Header><h3>Login</h3></Card.Header>
                    <Card.Body>
                        <>
                            <h5>Email</h5>
                            <input 
                                type='text'
                                id='email'
                                value={loginEmail} 
                                onChange={e => setLoginEmail(e.currentTarget.value)} 
                            />
                            <h5>Password</h5>
                            <input 
                                type='password'
                                id='password' 
                                value={loginPassword} 
                                onChange={e => setLoginPassword(e.currentTarget.value)} 
                            />
                        </>
                    </Card.Body>
                    <Card.Footer>
                        <Button
                            variant='light'
                            type='submit'
                            onClick={handleLogin}
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
                        <p>Welcome, {activeUser.name}</p>
                    </Card.Body>
                    <Card.Footer>
                        <Button
                            variant='light'
                            type='submit'
                            onClick={handleLogout}
                        >
                            Log Out
                        </Button>
                    </Card.Footer>
                </Card>
            )} 

            <Button onClick={callLog} >console.log</Button>
        </div>
    );
}

