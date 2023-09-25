import React from 'react';

function MenuBar({ onNewNoteClick, onTableViewClick }) {
  return (
    <div className="menu-bar">
      <div className="menu-item logo">
        <img src='../../graphics/logo.png' alt='ZettelGospel Logo'/>
      </div>
      <div className="menu-item" onClick={onNewNoteClick}>
        <span role="img" aria-label="New Note">✍️</span>
      </div>
      <div className="menu-item" onClick={onTableViewClick}>
        <span role="img" aria-label="Table View">⋮</span>
      </div>
    </div>
  );
}

export default MenuBar;
