import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTable, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import CreatePage from '../create-page/CreatePage'; // Import the CreatePage component

function MenuBar({ onNewNoteClick, onTableViewClick }) {
  return (
    <div className="menu-bar">
      <div className="menu-item logo">
        <img src="/logo.png" alt="Logo" className="logo"/>
      </div>
      <div className="menu-item" onClick={onNewNoteClick}>
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#c1c8ce"}}/>
      </div>
      <div className="menu-item">
        <FontAwesomeIcon icon={faPen} style={{ color: "#c1c8ce" }} />
      </div>
      <CreatePage />
      <div className="menu-item" onClick={onTableViewClick}>
        <FontAwesomeIcon icon={faTable} style={{color: "#c1c8ce"}}/>
      </div>
    </div>
  );
}

export default MenuBar;
