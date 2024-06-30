import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './header.css';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Header() {

    const [responsivemenuExpanded, setResponsiveMenuExpanded] = useState(false);

    const handleResponsiveClick = () => setResponsiveMenuExpanded(!responsivemenuExpanded)


    return(
        <header style={{height: responsivemenuExpanded ? '200px' : '70px'}}>
            <nav>
                <p id='header-logo' style={{display: 'inline'}}>Traditionals</p>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/cuts'>Cuts</NavLink>
                <NavLink to='/brews'>Brews</NavLink>
                {
                    responsivemenuExpanded ? <button onClick={handleResponsiveClick}><FontAwesomeIcon icon={faClose}></FontAwesomeIcon></button> : <button onClick={handleResponsiveClick}><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></button>
                }
            </nav>
           {
            responsivemenuExpanded ?  <div id='responsive-menu'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/cuts'>Cuts</Link>
                </li>
                <li>
                    <Link to='/brews'>Brews</Link>
                </li>
            </ul>
        </div> : <></>
           }
        </header>
    )
}

export default Header;