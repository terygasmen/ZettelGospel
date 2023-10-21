import React from 'react';

const GroupedNotesList = ({ notes }) => {
  const groupNotesByTopLevelBranch = (notes) => {
    const groupedNotes = {};

    notes.forEach((note) => {
      const topLevelBranch = note.address.match(/^[a-z]+\d+/i); // Extracting first letter and number combination before any slashes
      if (topLevelBranch) {
        const key = topLevelBranch[0].toLowerCase(); // Converting to lowercase for consistency
        if (!groupedNotes[key]) {
          groupedNotes[key] = [];
        }
        groupedNotes[key].push(note);
      }
    });

    return groupedNotes;
  };

  const groupedNotes = groupNotesByTopLevelBranch(notes);

  return (
    <div className='container'>
      {Object.keys(groupedNotes).map((topLevelBranch) => (
        <div key={topLevelBranch} className='note-group'>
          <h2>{topLevelBranch}</h2>
          <div className='stacked-notes'>
            {groupedNotes[topLevelBranch].map((note, index) => (
              <div key={note.id} className='stacked-note' style={{ zIndex: index }}>
                {note.title} - {note.text}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GroupedNotesList;
