import React, { useState, useEffect } from 'react';
import NoteCard from '../notecard/NoteCard';
import { getNotes, createNote, updateNote, deleteNote } from '../../db/db'; // Import CRUD functions

function NoteList() {
  const [notes, setNotes] = useState([]);

  // Fetch notes when the component mounts
  useEffect(() => {
    async function fetchNotes() {
      try {
        const fetchedNotes = await getNotes();
        setNotes(fetchedNotes);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    }

    fetchNotes();
  }, []);

  const handleContentChange = async (id, newContent) => {
    try {
      // Update the note's content in the database
      await updateNote(id, { content: newContent });
      // Refresh the list of notes
      const fetchedNotes = await getNotes();
      setNotes(fetchedNotes);
    } catch (error) {
      console.error('Error updating note content:', error);
    }
  };

  const handleCitationChange = async (id, newCitation) => {
    try {
      // Update the note's citation in the database
      await updateNote(id, { citation: newCitation });
      // Refresh the list of notes
      const fetchedNotes = await getNotes();
      setNotes(fetchedNotes);
    } catch (error) {
      console.error('Error updating note citation:', error);
    }
  };

  const addNote = async () => {
    try {
      // Create a new note in the database with default values
      const defaultNote = {
        address: 'Default Address',
        title: 'Default Title',
        content: 'Default Content',
        citation: 'Default Citation',
      };
      await createNote(defaultNote.address, defaultNote.title, defaultNote.content, defaultNote.citation);
      // Refresh the list of notes
      const fetchedNotes = await getNotes();
      setNotes(fetchedNotes);
    } catch (error) {
      console.error('Error creating note:', error);
    }
  };

  const removeNote = async (id) => {
    try {
      // Delete the note from the database
      await deleteNote(id);
      // Refresh the list of notes
      const fetchedNotes = await getNotes();
      setNotes(fetchedNotes);
    } catch (error) {
      console.error('Error deleting note:', error);
    }
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
