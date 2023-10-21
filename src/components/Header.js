import React from 'react';
import { FaTableColumns } from 'react-icons/fa6';
import { BsFillBookmarkStarFill } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';

const Header = ({ handleSearchNote }) => {
    return (
        <div className='header'>
                <img src='logo.png' alt='ZettelGospel logo' className='logo'/>
                <button className='menu-item' onClick={() => handleSearchNote('')}>
                        <FaSearch size='1.4em' color='#c1c8ce' />
		</button>
                <button
                        className='save menu-item'
                >
                <FaTableColumns size='1.4em' color='#c1c8ce' />
                </button>
                <button className='menu-item'>
                        <BsFillBookmarkStarFill size='1.4em' color='#c1c8ce' />
                </button>
        </div>
    );
};

export default Header;
