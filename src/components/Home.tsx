import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Stack } from '@mantine/core';

export let Home = () => {    
    const [user, loadingUser] = useAuthState(auth)

    if (loadingUser) return <>Loading...</>
    
    return (
        <Stack 
            align='center'
            style={{
                margin: '2em'
            }}
        >
            <h1>Welcome to Bad Bank{user?.email ? `, ${user.email}` : ''}!!</h1>
            <h2>Now with added security and authentication!*</h2>
            <p>*everyone can see your email and password on AllData page.</p>
        </Stack>        
    );
}