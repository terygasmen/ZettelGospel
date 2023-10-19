import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTable, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function MenuBar() {
  return (
    <div className="menu-bar">
      <div className="menu-item logo">
        <Link to="/">
          <img src="/logo.png" alt="Logo" className="logo" />
        </Link>
      </div>
      <div className="menu-item">
        <Link to="/search">
          <FontAwesomeIcon icon={faSearch} style={{color: "#c1c8ce"}} />
        </Link>
      </div>
      <div className="menu-item">
        <Link to="/create">
          <FontAwesomeIcon icon={faPen} style={{ color: "#c1c8ce" }} />
        </Link>
      </div>
      <div className="menu-item">
        <Link to="/table-view">
          <FontAwesomeIcon icon={faTable} style={{color: "#c1c8ce"}} />
        </Link>
      </div>
    </div>
  );
}

export default MenuBar;
