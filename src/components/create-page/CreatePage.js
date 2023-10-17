import React from 'react';
import NoteCard from '../notecard/NoteCard';
import NoteList from '../notecard-list/NoteList';

function CreatePage() {
  return (
    <div className="create-page">
      <div className="left-panel">
        <NoteCard />
      </div>
      <div className="right-panel">
        <NoteList />
      </div>
    </div>
  );
}

export default CreatePage;
