import React from 'react';
import { Link, NavLink } from 'react-router';
const Header = () => {
    return (
        <div>
            <h1 className='color'>I am Heder and i am fix..</h1>
            <nav >
             {/* <a href="/">About</a>
             <a href="/T">Tablate</a>
             <a href="/Laptop">Laptop</a> */}
             <NavLink className='ancorStyle' to={'/'}>About</NavLink>
             <NavLink className='ancorStyle' to={'/T'}>Tablate</NavLink>
             <NavLink className='ancorStyle' to={'/laptop'}>Laptop</NavLink>
             <NavLink className='ancorStyle' to={'/users'}>Users</NavLink>
            </nav>
        </div>
    ) 
};

export default Header;