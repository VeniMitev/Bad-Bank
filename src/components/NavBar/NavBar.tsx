import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom";


export let NavBar = () => {
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
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}