import { useNavigate } from "react-router-dom";
import { Button } from '@mantine/core';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

export const LogOutButton = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await signOut(auth);
        navigate('/')
    }
    return (
        <Button
            onClick={handleLogout}
        >
            Log Out
        </Button>
    )
}