import React, { useState } from 'react';

function NoteCard({ address: initialAddress, title: initialTitle, content: initialContent, citation: initialCitation, onContentChange, onCitationChange }) {
  const [address, setAddress] = useState(initialAddress);
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);
  const [citation, setCitation] = useState(initialCitation);

  const handleContentChange = (e) => {
    setContent(e.target.value);
    onContentChange(e.target.value);
  };

  const handleCitationChange = (e) => {
    setCitation(e.target.value);
    onCitationChange(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add logic to handle form submission here, if needed.
  };

  return (
    // Note card form
    <form className="note-card" onSubmit={handleSubmit}>
      {/* Note card header */}
      <div className="note-card-header">
          <input className="note-card-address" type="text" placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)} />
          <input className="note-card-title" type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      {/* Note card content */}
      <textarea className="note-card-content" placeholder='Content' value={content} onChange={handleContentChange} />
      {/* Note card footer */}
      <input
        className="note-card-citation"
        type="text"
        placeholder='Citation of the note'
        value={citation}
        onChange={handleCitationChange}
      />
      {/* Submit button */}
      <button type="submit">Create Note</button>
    </form>
  );
}

export default NoteCard;
