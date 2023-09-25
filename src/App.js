import React, { useState } from 'react';
import './App.css';
import NoteList from './components/notecard-list/NoteList';
import MenuBar from './components/menubar/MenuBar';
import { createNote } from './db/notes'; // Import the createNote function

function App() {
  const [isTableView, setTableView] = useState(false);

  const handleNewNoteClick = async () => {
    // Create a new note in the database
    await createNote('', '', '', ''); // Provide initial values or empty strings as needed
  };

  const handleTableViewClick = () => {
    setTableView(!isTableView);
  };

  return (
    <div className="App">
      <MenuBar
        onNewNoteClick={handleNewNoteClick}
        onTableViewClick={handleTableViewClick}
      />
      <div className="main">
        <NoteList isTableView={isTableView} />
      </div>
    </div>
  );
}

export default App;
