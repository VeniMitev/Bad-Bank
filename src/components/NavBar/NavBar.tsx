import { Link } from 'react-router-dom';
import './NavBar.css'

export let NavBar = () => {
    const linkStyles = {
        textDecoration: 'none',
        color: 'black'
    };

    return (
        <nav>
            <div className='logo'>
                <h1>BadBank</h1>
            </div>
            <div>
                <Link style={linkStyles} to='/'>Home</Link>
            </div>
            <div>
                <Link style={linkStyles} to='/create-account'>Create Account</Link>
            </div>
            <div>
                <Link style={linkStyles} to='/login'>Login</Link>
            </div>
            <div>
                <Link style={linkStyles} to='/deposit'>Deposit</Link>
            </div>
            <div>
                <Link style={linkStyles} to='/withdraw'>Withdraw</Link>
            </div>
            <div>
                <Link style={linkStyles} to='/balance'>Balance</Link>
            </div>
            <div>
                <Link style={linkStyles} to='/alldata'>AllData</Link>
            </div>
        </nav>
    );
}