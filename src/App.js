import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Header from './components/Header';
import Search from './components/Search';
import TableView from './components/TableView';
import GroupedNotesList from './components/GroupedNotesList';

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
  const [isTableView, setIsTableView] = useState(false);
  const [showGroupedNotes, setShowGroupedNotes] = useState(false);

  const handleToggleTableView = () => {
    setIsTableView(!isTableView);
  };

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
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
      <Header
        handleToggleTableView={handleToggleTableView}
        handleToggleGroupedNotes={() => setShowGroupedNotes(!showGroupedNotes)}
      />
      <Search handleSearchNote={setSearchText} />
      {showGroupedNotes ? (
        <GroupedNotesList notes={notes} />
      ) : isTableView ? (
        <TableView notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} handleDeleteNote={deleteNote} />
      ) : (
        <NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote} />
      )}
    </div>
  );
};

export default App;
