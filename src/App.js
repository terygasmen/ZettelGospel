import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import NoteList from './components/notecard-list/NoteList';
import MenuBar from './components/menubar/MenuBar';
import { getNotes, createNote } from '../src/db/db';
import CreatePage from './components/create-page/CreatePage';

function App() {
  const [isTableView, setTableView] = useState(false);
  const [notes, setNotes] = useState([]);

  // Fetch notes when the component mounts
  useEffect(() => {
    async function fetchNotes() {
      try {
        const fetchedNotes = await getNotes(); // Fetch notes from the database
        setNotes(fetchedNotes); // Set notes in the local state
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    }

    fetchNotes(); // Call the fetchNotes function
  }, []); // Empty dependency array ensures this effect runs once after the initial render

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
    <Router>
      <div className="App">
        <MenuBar
          onNewNoteClick={handleNewNoteClick}
          onTableViewClick={handleTableViewClick}
        />
        <div className="main">
          <Routes>
            <Route path="/" element={<NoteList isTableView={isTableView} notes={notes} setNotes={setNotes} />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/note-list" element={<NoteList isTableView={isTableView} notes={notes} setNotes={setNotes} />} />
            <Route path="/*" element={<Navigate to="/" />} /> {/* Redirect to main page for unknown routes */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
