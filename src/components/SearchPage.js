import React, { useState } from 'react';
import NoteCard from './NoteCard';

function SearchPage({ notes }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNotes = notes.filter((note) =>
    note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-page">
      <input
        type="text"
        placeholder="Search notes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="search-results">
        {filteredNotes.map((note) => (
          <NoteCard
            key={note._id}
            address={note.address}
            title={note.title}
            content={note.content}
            citation={note.citation}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
