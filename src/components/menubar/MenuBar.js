import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTable, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function MenuBar({ onNewNoteClick, onTableViewClick }) {
  return (
    <div className="menu-bar">
      <div className="menu-item logo">
        <img src='../../logo.svg' alt='ZettelGospel Logo'/>
      </div>
      <div className="menu-item" onClick={onNewNoteClick}>
        <FontAwesomeIcon icon={faMagnifyingGlass}/>
      </div>
      <div className="menu-item" onClick={onNewNoteClick}>
        <FontAwesomeIcon icon={faPen}/>  
      </div>
      <div className="menu-item" onClick={onTableViewClick}>
        <FontAwesomeIcon icon={faTable}/>
      </div>
    </div>
  );
}

export default MenuBar;
