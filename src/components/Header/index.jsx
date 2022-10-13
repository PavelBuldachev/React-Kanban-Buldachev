import React from 'react';
import './index.css';
import UserMenu from '../UserMenu';

function Header() {
    return ( 
        <header>
        <h1 className='header-title'>Awesome Kanban Board</h1>
        <UserMenu />
        </header>
     );
}

export default Header;
