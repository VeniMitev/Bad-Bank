import { Center, Navbar, NavLink, Stack, Title } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';
import { LogOutButton } from '../LogOutButton';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { Home2, UserPlus, Login, Cash, ArrowBarRight, ArrowBarLeft, Database } from 'tabler-icons-react';

export const NavBar = () => {
    const location = useLocation();
    const [user] = useAuthState(auth)

    return (
        <Navbar height={'100vh'} width={{base: 200}}>
            <Navbar.Section mt='xs' >
                <Center >
                    <Title order={1} align='center'>
                        Bad Bank
                    </Title>
                </Center>
            </Navbar.Section>
            <Navbar.Section grow>
                <NavLink 
                    label="Home" 
                    component={Link} 
                    to="/" 
                    active={location.pathname === '/'} 
                    icon={
                        <Home2 
                            size={24}
                            strokeWidth={2}
                            color={'black'}
                        />
                    }
                />
                {!user?.email ? (
                    <>
                        <NavLink 
                            label="Create Account" 
                            component={Link} to="/create-account" 
                            active={location.pathname === '/create-account'} 
                            icon={
                                <UserPlus 
                                    size={24}
                                    strokeWidth={2}
                                    color={'black'}
                                />
                            }
                        />
                        <NavLink 
                            label="Login" 
                            component={Link} 
                            to="/login" 
                            active={location.pathname === '/login'} 
                            icon={
                                <Login 
                                    size={24}
                                    strokeWidth={2}
                                    color={'black'}
                                />
                            }                            
                        />
                    </>
                ) : (
                    <>
                        <NavLink 
                            label="Deposit" 
                            component={Link} 
                            to="/deposit" 
                            active={location.pathname === '/deposit'} 
                            icon={
                                <Cash 
                                    size={24}
                                    strokeWidth={2}
                                    color={'black'}
                                />
                            }
                            rightSection={
                                <ArrowBarLeft 
                                    size={24}
                                    strokeWidth={2}
                                    color={'black'}
                                />
                            }
                        />
                        <NavLink 
                            label="Withdraw" 
                            component={Link} 
                            to="/withdraw" 
                            active={location.pathname === '/withdraw'} 
                            icon={
                                <Cash 
                                    size={24}
                                    strokeWidth={2}
                                    color={'black'}
                                />
                            }
                            rightSection={
                                <ArrowBarRight
                                    size={24}
                                    strokeWidth={2}
                                    color={'black'}
                                />
                            }
                        />
                    </>
                )}  
                <NavLink 
                    label="AllData" 
                    component={Link} 
                    to="/alldata" 
                    active={location.pathname === '/alldata'} 
                    icon={
                        <Database 
                            size={24}
                            strokeWidth={2}
                            color={'black'}
                        />
                    }
                />
            </Navbar.Section>
            <Navbar.Section>
                {user?.email && (
                    <Center>
                        <Stack spacing={2} style={{marginBottom: '1em'}}>
                            <span>{user?.email}</span>
                            <LogOutButton />
                        </Stack>                        
                    </Center>
                )}
            </Navbar.Section>
        </Navbar>
    )
}