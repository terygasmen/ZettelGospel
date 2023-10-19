import React, { useState, useEffect } from 'react';
import { getNotes } from '../db/db';
import NoteList from './NoteList';

function MainPage() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Fetch notes when the component mounts
    async function fetchNotes() {
      try {
        const fetchedNotes = await getNotes(); // Fetch notes from the API
        setNotes(fetchedNotes); // Set notes in the local state
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    }

    fetchNotes(); // Call the fetchNotes function
  }, []); // Empty dependency array ensures this effect runs once after the initial render

  return (
    <div className="main-page">
      <h1>My Notes</h1>
      <NoteList notes={notes} />
    </div>
  );
}

export default MainPage;
