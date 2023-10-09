import React, { useState } from 'react';
import axios from 'axios';

function NoteCard({ onContentChange, onCitationChange }) {
  const [address, setAddress] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [citation, setCitation] = useState('');

  const handleContentChange = (e) => {
    setContent(e.target.value);
    onContentChange(e.target.value);
  };

  const handleCitationChange = (e) => {
    setCitation(e.target.value);
    onCitationChange(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/notes', {
        address,
        title,
        content,
        citation,
      });
      // Optionally, you can reset the form fields after successful submission
      setAddress('');
      setTitle('');
      setContent('');
      setCitation('');
      // You can also add logic to handle success messages or redirects here, if needed.
    } catch (error) {
      console.error('Error creating note:', error);
    }
  };

  return (
    // Note card form
    <form className="note-card" onSubmit={handleSubmit}>
      {/* Note card header */}
      <div className="note-card-header">
        <input
          className="note-card-address"
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          className="note-card-title"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      {/* Note card content */}
      <textarea
        className="note-card-content"
        placeholder="Content"
        value={content}
        onChange={handleContentChange}
      />
      {/* Note card footer */}
      <input
        className="note-card-citation"
        type="text"
        placeholder="Citation of the note"
        value={citation}
        onChange={handleCitationChange}
      />
      {/* Submit button */}
      <button type="submit">Create Note</button>
    </form>
  );
}

export default NoteCard;
