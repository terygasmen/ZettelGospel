import React, { useState } from 'react';
import './App.css';
import NoteList from './components/notecard-list/NoteList';
import MenuBar from './components/menubar/MenuBar';
import { createNote } from './db/notes'; // Import the createNote function

function App() {
  const [isTableView, setTableView] = useState(false);
  const [notes, setNotes] = useState([]);

  const handleNewNoteClick = async () => {
    // Create a new note in the database
    try {
      const newNote = await createNote('', '', '', ''); // Provide initial values or empty strings as needed
      setNotes([...notes, newNote]); // Add the new note to the current notes state
    } catch (error) {
      console.error('Error creating note:', error);
    }
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
        <NoteList isTableView={isTableView} notes={notes} setNotes={setNotes} />
      </div>
    </div>
  );
}

export default App;
