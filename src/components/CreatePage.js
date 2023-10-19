import React, { useState } from 'react';
import NoteCard from './NoteCard';
import NoteList from './NoteList';

function CreatePage() {
  const [content, setContent] = useState('');
  const [citation, setCitation] = useState('');

  // Function to handle content change in NoteCard
  const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  const handleCitationChange = (newCitation) => {
    setCitation(newCitation);
  };

  return (
    <div className="create-page">
      <div className="left-panel">
        {/* Pass handleContentChange and handleCitationChange functions as props */}
        <NoteCard onContentChange={handleContentChange} onCitationChange={handleCitationChange} />
      </div>
      <div className="right-panel">
        {/* Pass content and citation states as props */}
        <NoteList content={content} citation={citation} />
      </div>
    </div>
  );
}

export default CreatePage;
