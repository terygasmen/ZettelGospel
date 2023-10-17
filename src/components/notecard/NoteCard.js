import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

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
      // Send a POST request to server endpoint
      await axios.post('/api/notes', {
        address,
        title,
        content,
        citation,
      });
      // reset the form fields after successful submission
      setAddress('');
      setTitle('');
      setContent('');
      setCitation('');
      // logic to handle success messages or redirects here, if needed.
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
          placeholder="address of the note"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          className="note-card-title"
          type="text"
          placeholder="title of the note"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      {/* Note card content */}
      <textarea
        className="note-card-content"
        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim blandit volutpat maecenas volutpat blandit aliquam. Orci ac auctor augue mauris augue neque gravida in fermentum. Ut morbi tincidunt augue interdum velit euismod in pellentesque massa. A condimentum vitae sapien pellentesque habitant morbi tristique."
        value={content}
        onChange={handleContentChange}
      />
      {/* Note card footer */}
      <section className='note-card-footer'>
        <input
          className="note-card-citation"
          type="text"
          placeholder="citation of the note"
          value={citation}
          onChange={handleCitationChange}
        />
        {/* Submit button */}
        <button type="submit">
          <FontAwesomeIcon icon={faFloppyDisk} />
        </button>
      </section>
    </form>
  );
}

export default NoteCard;