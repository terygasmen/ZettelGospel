import React, { useState, useEffect } from 'react';
import NoteCard from '../notecard/NoteCard';
import { getNotes } from '../../db/db';

function NoteList() {
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

  return (
    <div className="note-list">
      {notes.map((note) => (
        <div key={note._id}>
          {/* Pass note data to NoteCard component */}
          <NoteCard
            address={note.address}
            title={note.title}
            content={note.content}
            citation={note.citation}
            // Pass unique ID (note._id) if needed for update or delete operations
          />
        </div>
      ))}
    </div>
  );
}

export default NoteList;
