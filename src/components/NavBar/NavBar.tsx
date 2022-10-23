import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { LogOutButton } from '../LogOutButton';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';

export let NavBar = () => {
    const [user] = useAuthState(auth)

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={NavLink} to='/'>Bad Bank</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav variant="tabs" defaultActiveKey="/home" className="me-auto">
                    <Nav.Link
                        as={NavLink}
                        to='/'
                    >
                        Home
                    </Nav.Link>
                    <Nav.Link
                        as={NavLink}
                        to='/create-account'
                    >
                        Create Account
                    </Nav.Link>
                    <Nav.Link
                        as={NavLink}
                        to='/login'
                    >
                        Login
                    </Nav.Link>
                    <Nav.Link
                        as={NavLink}
                        to='/deposit'
                    >
                        Deposit
                    </Nav.Link>
                    <Nav.Link
                        as={NavLink}
                        to='/withdraw'
                    >
                        Withdraw
                    </Nav.Link>
                    <Nav.Link
                        as={NavLink}
                        to='/alldata'
                    >
                        AllData
                    </Nav.Link>

                </Nav>
                {user?.email && (
                    <div>
                        <span style={{paddingRight: '1em'}}>{user?.email}</span>
                        <LogOutButton />
                    </div>
                )}                
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}