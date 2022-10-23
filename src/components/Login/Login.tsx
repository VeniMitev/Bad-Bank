import { useState, useEffect } from 'react';
import './Login.css';
import { Button, Card, Stack, PasswordInput, TextInput } from '@mantine/core';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { LogOutButton } from '../LogOutButton';

export let Login = () => {
    const [user] = useAuthState(auth)
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [error, setError] = useState(false);
    const [disableLogin, setDisableLogin] = useState(true);

    const handleLogin = async () => {
        signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            .then(() => {
                setLoginEmail('');
                setLoginPassword('');
                setError(false);
            })
            .catch(() => {
                setError(true);
            })
    }

    useEffect(() =>{
        if (loginEmail && loginPassword && loginPassword.length >= 6) {
            setDisableLogin(false)
        }
    }, [loginEmail, loginPassword]);

    return (
        <div className="card-container">
            {!user ? (
                <Card 
                    shadow='lg' 
                    radius='xs'
                    withBorder
                >
                    <Stack align='center'>
                        <h3>Login</h3>
                        
                        <h5>Email</h5>
                        <TextInput 
                            placeholder='your@email.com'
                            style={{width: '90%'}}
                            value={loginEmail} 
                            onChange={e => setLoginEmail(e.currentTarget.value)} 
                        />
                        <h5>Password</h5>
                        <PasswordInput 
                            placeholder='******'
                            style={{width: '90%'}}
                            value={loginPassword} 
                            onChange={e => setLoginPassword(e.currentTarget.value)} 
                        />
                        {error ? 'Wrong credentials!' : ''}

                        <Button
                            onClick={handleLogin}
                            disabled={disableLogin}
                        >
                            Log In
                        </Button>
                    </Stack>                   
                </Card>
            ):(
                <Card 
                    shadow='lg' 
                    radius='xs'
                    withBorder
                >
                    <h5>Success</h5>
                    <p>Welcome, {user?.email}</p>
        
                    <LogOutButton />
                </Card>
            )}
        </div>
    );
}

