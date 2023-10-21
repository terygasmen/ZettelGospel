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
    <div className='grouped'>
      {Object.keys(groupedNotes).map((topLevelBranch) => (
        <div key={topLevelBranch} className='note-group'>
          <div className='stacked-notes'>
            {groupedNotes[topLevelBranch].map((note, index) => (
              <div key={note.id} className='stacked-note note' style={{ zIndex: notes.length - index }}>
                <div className='note-details'>
                  <section className='note-header'>
                    <span className='note-address'>{note.address}</span>
                    <span className='note-title'>{note.title}</span>
                  </section>
                  <span className='note-content'>{note.text}</span>
                  <div className='note-footer'>
                    <small className='note-citation'>{note.citation}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GroupedNotesList;
