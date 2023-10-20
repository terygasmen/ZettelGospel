import React from 'react';
import NoteList from './NoteList';

function TableView({ notes }) {
  // Customize the TableView layout and styles as needed
  return (
    <div className="table-view">
      <h2>Table View</h2>
      <NoteList notes={notes} />
    </div>
  );
}

export default TableView;
