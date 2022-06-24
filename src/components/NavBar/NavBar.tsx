import { Link } from 'react-router-dom';
import './NavBar.css'

export let NavBar = () => {
    const linkStyles = {
        textDecoration: 'none',
        color: 'black'
    };

    return (
        <nav>
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