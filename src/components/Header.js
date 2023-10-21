import React from 'react';
import { FaTableColumns } from 'react-icons/fa6';
import { BsFillBookmarkStarFill } from 'react-icons/bs';

const Header = ({ handleSearchNote, handleToggleTableView }) => {
    return (
        <div className='header'>
                <img src='logo.png' alt='ZettelGospel logo' className='logo'/>
                <button className='save menu-item' onClick={handleToggleTableView}>
                        <FaTableColumns size='1.4em' color='#c1c8ce'/>
                </button>
                <button className='menu-item'>
                        <BsFillBookmarkStarFill size='1.4em' color='#c1c8ce'/>
                </button>
        </div>
    );
};

export default Header;
