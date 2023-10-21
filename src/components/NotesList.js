import React from 'react';
import Note from './Note';
import AddNote from './AddNote';

export const customSort = (a, b) => {
	const segmentRegex = /([a-zA-Z]+|-?\d+)/g;

	const getSegments = (address) => {
		if (address === null || address === undefined) {
		    return ['']; // Handle null or undefined addresses by providing a default segment
		}
		const segments = address.match(segmentRegex);
		return segments ? segments.map(segment => isNaN(segment) ? segment.toLowerCase() : parseInt(segment)) : [''];
	};
	    
    
	const segmentsA = getSegments(a.address);
	const segmentsB = getSegments(b.address);
    
	for (let i = 0; i < Math.min(segmentsA.length, segmentsB.length); i++) {
	    if (segmentsA[i] !== segmentsB[i]) {
		return segmentsA[i] < segmentsB[i] ? -1 : 1;
	    }
	}
    
	return segmentsA.length - segmentsB.length;
};

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
    const sortedNotes = [...notes].sort(customSort);

    return (
        <div className='notes-list'>
            <AddNote handleAddNote={handleAddNote} />
            {sortedNotes.map((note) => (
                <Note
                    key={note.id}
                    id={note.id}
                    address={note.address}
                    title={note.title}
                    text={note.text}
                    citation={note.citation}
                    handleDeleteNote={handleDeleteNote}
                />
            ))}
        </div>
    );
};

export default NotesList;
