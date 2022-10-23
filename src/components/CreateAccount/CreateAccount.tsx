import { useState, useEffect } from 'react';
import './CreateAccount.css';
import { Button, Card } from 'react-bootstrap';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from 'firebase/firestore';
import { db, auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { LogOutButton } from '../LogOutButton';


export let CreateAccount = () => {
    const [user] = useAuthState(auth)

    const [status, setStatus] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disableButton, setDisableButton] = useState(true);
    const [shortPass, setShortPass] = useState(false)

    const validate = (field: any, label: any) => {
        if (!field) {
            setStatus(`Error: ${label}`);
            setTimeout(() => setStatus(''), 3000);
            console.log(status)
            return false;
        }
        return true;
    }

    const handleCreate = async () => {
        if (password.length < 6) {
            setShortPass(true);
            return;
        }
        if (!validate(name, 'name')) return;
        if (!validate(email, 'email')) return;
        if (!validate(password, 'password')) return;

        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                console.log(user)

                await setDoc(doc(db, 'users', user.uid), {
                    uid: user.uid,
                    name: name,
                    email: email,
                    password: password,
                    balance: 0,
                });
            });

        setName('');
        setEmail('');
        setPassword('');
    }

    useEffect(() => {
        if (name && email && password) {
            setDisableButton(false)
        }
    }, [name, email, password]);

    return (
        <div className='card-container'>
            {!user ? (
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
                            <br />
                            {shortPass ? '*Password need to be more than 6 character long!' : ''}
                        </>
                    </Card.Body>
                    <Card.Footer>
                        <Button
                            variant='primary'
                            type='submit'
                            onClick={handleCreate}
                            disabled={disableButton}
                        >
                            Create Account
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
                        <LogOutButton />
                    </Card.Footer>
                </Card>
            )}                
        </div>
    );
}