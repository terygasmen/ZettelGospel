import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTable, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import NoteCard from '../notecard/NoteCard.js'; // Import the NoteCard component

function MenuBar({ onNewNoteClick, onTableViewClick }) {
  const [showNoteCard, setShowNoteCard] = useState(false);

  const handleNewNoteClick = () => {
    onNewNoteClick(); // Call the provided onNewNoteClick function
    setShowNoteCard(true); // Show the NoteCard component
  };

  const handleCloseNoteCard = () => {
    setShowNoteCard(false); // Hide the NoteCard component
  };

  return (
    <div className="menu-bar">
      <div className="menu-item logo">
        <img src='../../logo.png' alt='ZettelGospel Logo'/>
      </div>
      <div className="menu-item" onClick={onNewNoteClick}>
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#c1c8ce",}}/>
      </div>
      <div className="menu-item" onClick={showNoteCard ? handleCloseNoteCard : handleNewNoteClick}>
        {showNoteCard ? 'Close Note' : <FontAwesomeIcon icon={faPen} style={{ color: "#c1c8ce" }} />}
      </div>
      {showNoteCard && <NoteCard onContentChange={() => {}} onCitationChange={() => {}} />}
      <div className="menu-item" onClick={onTableViewClick}>
        <FontAwesomeIcon icon={faTable} style={{color: "#c1c8ce",}}/>
      </div>
    </div>
  );
}

export default MenuBar;
