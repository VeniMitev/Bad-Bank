import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom";


export let NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={NavLink} to='/'>Bad Bank</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link
                        as={NavLink}
                        to=''
                    >

                    </Nav.Link>
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
                        to='/balance'
                    >
                        Balance
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

{/* <nav>
<div className='logo'>
    <h1>BadBank</h1>
</div>
<div>
    <NavLink 
        to='/' 
        style={({isActive}) => isActive ? linkActive : linkNotActive}
    >
        Home
    </NavLink>
</div>
<div>
    <NavLink 
        to='/create-account'
        style={({isActive}) => isActive ? linkActive : linkNotActive}
    >
        Create Account
    </NavLink>
</div>
<div>
    <NavLink 
        to='/login'
        style={({isActive}) => isActive ? linkActive : linkNotActive}
    >
        Login
    </NavLink>
</div>
<div>
    <NavLink 
        to='/deposit'
        style={({isActive}) => isActive ? linkActive : linkNotActive}
    >
        Deposit
    </NavLink>
</div>
<div>
    <NavLink 
        to='/withdraw'
        style={({isActive}) => isActive ? linkActive : linkNotActive}
    >
        Withdraw
    </NavLink>
</div>
<div>
    <NavLink 
        to='/balance'
        style={({isActive}) => isActive ? linkActive : linkNotActive}    
    >
        Balance
    </NavLink>
</div>
<div>
    <NavLink 
        to='/alldata'
        style={({isActive}) => isActive ? linkActive : linkNotActive}
    >
        AllData
    </NavLink>
</div>
</nav> */}