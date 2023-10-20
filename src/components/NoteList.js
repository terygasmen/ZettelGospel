import React, { useState, useEffect } from 'react';
import { getNotes } from '../db/db';
import NoteCard from './NoteCard';

function NoteList() {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch notes when the component mounts
  useEffect(() => {
    console.log('NoteList component mounted');
    async function fetchNotes() {
      try {
        console.log('Fetching notes...');
        const fetchedNotes = await getNotes();
        console.log('Notes fetched:', fetchedNotes);
        setNotes(fetchedNotes);
        setIsLoading(false);
        console.log('Loading state set to false');
      } catch (error) {
        console.error('Error fetching notes:', error);
        setIsLoading(false);
      }
    }

    fetchNotes();
  }, []);

  if (isLoading) {
    console.log('Rendering loading message');
    return <div>Loading...</div>;
  }

  return (
    <div className="note-list">
      {notes.map((note) => (
        <div key={note._id}>
          {/* Pass note data and change handlers to NoteCard component */}
          <NoteCard
            address={note.address}
            title={note.title}
            content={note.content}
            citation={note.citation}
            onContentChange={(newContent) => {
              // Handle content change here
              console.log(`Content changed for note with ID ${note._id}: ${newContent}`);
            }}
            onCitationChange={(newCitation) => {
              // Handle citation change here
              console.log(`Citation changed for note with ID ${note._id}: ${newCitation}`);
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default NoteList;
