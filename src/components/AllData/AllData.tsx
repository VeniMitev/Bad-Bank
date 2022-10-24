import './AllData.css';
import { Accordion, Avatar, Group, Stack } from '@mantine/core';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export let AllData = () => {
    const [currentUser] = useAuthState(auth)
    const [value, loading] = useCollection(
        collection(db, 'users')
    )

    const user = value?.docs.map((doc, i: any) => {
        const data = doc.data();
        let transactionHistory = data.history.map((hist: any, i: number) => {
            let style: object;
            if (hist.type === 'deposit') {
                style = {color: 'green'} 
            } else {
                style = {color: 'red'}
            }
            
            return (
                <li key={i}>
                    <p style={style}>
                        {hist.type === 'deposit' ? 'Deposit' : 'Withdraw'}: ${hist.amount} | New Balance: ${hist.newBalance} | at: {hist.createdAt}
                    </p>
                </li>
            )
        })

        return (
            <Accordion.Item value={data.uid}>
                <Accordion.Control>
                    <Group>
                        <Avatar />
                        <h3>{data.name} {data.uid === currentUser?.uid ? (
                            <span style={{color: 'green'}}>- Current User</span>
                        ) : ''}</h3>
                    </Group>
                </Accordion.Control>
                <Accordion.Panel>
                    <>
                        <h6>Email: {data.email}</h6>
                        <h6>Password: {data.password}</h6>
                        <h6>Current Balance: ${data.balance}</h6>
                        <p>Transaction History: </p>
                        <ol>
                            {transactionHistory}
                        </ol>
                    </>
                </Accordion.Panel>
            </Accordion.Item>
        )
    })

    if(loading) return <>Loading...</>

    return (
        <Stack align='center'>
            <h1>AllData</h1>            
            <Accordion 
                style={{width: '50%'}}
                variant="separated" 
                defaultValue="userData"
                radius='xs'
            >
                {user}
            </Accordion>
        </Stack>        
    );
}