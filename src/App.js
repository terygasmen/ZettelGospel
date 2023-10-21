import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Header from './components/Header';
import Search from './components/Search';

const App = () => {
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			address: 'a1',
			title: 'sample note',
			text: 'This is a sample note',
			citation: 'nikola tesla',
		},
	]);

	const [searchText, setSearchText] = useState('');
    	const [isSearchVisible, setIsSearchVisible] = useState(false);

	const handleToggleSearch = () => {
		setIsSearchVisible(!isSearchVisible);
	};
	const handleCloseSearch = () => {
		setIsSearchVisible(false);
	};

	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

	const addNote = (address, title, text, citation) => {
		const newNote = {
			id: nanoid(),
			address: address,
			title: title,
			text: text,
			citation: citation,
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<div className='container'>
		    <Header handleToggleSearch={handleToggleSearch} handleSearchNote={setSearchText} />
			{isSearchVisible && (
				<Search
					handleSearchNote={setSearchText}
					handleCloseSearch={handleCloseSearch}
				/>

			)}
		    <NotesList
			notes={notes.filter((note) =>
			    note.text && note.text.toLowerCase().includes(searchText)
			)}
			handleAddNote={addNote}
			handleDeleteNote={deleteNote}
		    />
		</div>
	);
};

export default App;