import { NavLink } from 'react-router-dom';
import './header.css';

function Header() {
    return(
        <header>
            <nav>
                <p id='header-logo' style={{display: 'inline'}}>Traditionals</p>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/cuts'>Cuts</NavLink>
                <NavLink to='/brews'>Brews</NavLink>
            </nav>
        </header>
    )
}

export default Header;