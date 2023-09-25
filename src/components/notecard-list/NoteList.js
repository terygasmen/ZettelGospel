import React, { useState, useEffect } from 'react';
import NoteCard from '../notecard/NoteCard';
import { getNotes, createNote, updateNote, deleteNote } from '../../db/notes'; // Import CRUD functions

function NoteList() {
  const [notes, setNotes] = useState([]);

  // Fetch notes when the component mounts
  useEffect(() => {
    async function fetchNotes() {
      const fetchedNotes = await getNotes();
      setNotes(fetchedNotes);
    }

    fetchNotes();
  }, []);

  const handleContentChange = async (id, newContent) => {
    // Update the note's content in the database
    await updateNote(id, { content: newContent });
    // Refresh the list of notes
    const fetchedNotes = await getNotes();
    setNotes(fetchedNotes);
  };

  const handleCitationChange = async (id, newCitation) => {
    // Update the note's citation in the database
    await updateNote(id, { citation: newCitation });
    // Refresh the list of notes
    const fetchedNotes = await getNotes();
    setNotes(fetchedNotes);
  };

  const addNote = async () => {
    // Create a new note in the database
    await createNote('', '', ''); // Provide initial values or empty strings as needed
    // Refresh the list of notes
    const fetchedNotes = await getNotes();
    setNotes(fetchedNotes);
  };

  const removeNote = async (id) => {
    // Delete the note from the database
    await deleteNote(id);
    // Refresh the list of notes
    const fetchedNotes = await getNotes();
    setNotes(fetchedNotes);
  };

  return (
    <div className="note-list">
      {notes.map((note) => (
        <div key={note._id}>
          <NoteCard
            address={note.address}
            title={note.title}
            content={note.content}
            citation={note.citation}
            onContentChange={(newContent) => handleContentChange(note._id, newContent)}
            onCitationChange={(newCitation) => handleCitationChange(note._id, newCitation)}
          />
          <button onClick={() => removeNote(note._id)}>Remove</button>
        </div>
      ))}
      <button onClick={addNote}>Add Note</button>
    </div>
  );
}

export default NoteList;
