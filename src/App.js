import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import MenuBar from './components/menubar/MenuBar';
import { getNotes } from '../src/db/db';
import MainPage from './components/main-page/MainPage';
import CreatePage from './components/create-page/CreatePage';
import TableView from './components/table-view/TableView';
import SearchPage from './components/search-page/SearchPage';

function App() {
  const [notes, setNotes] = useState([]);

  // Fetch notes when the component mounts
  useEffect(() => {
    async function fetchNotes() {
      try {
        const fetchedNotes = await getNotes(); // Fetch notes from the database
        setNotes(fetchedNotes); // Set notes in the local state
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    }

    fetchNotes(); // Call the fetchNotes function
  }, []); // Empty dependency array ensures this effect runs once after the initial render

  return (
    <Router>
      <div className="App">
        <MenuBar />
        <div className="main">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/table-view" element={<TableView notes={notes} />} /> {/* Route for TableView */}
            <Route path="/search" element={<SearchPage notes={notes} />} /> {/* Route for SearchPage */}
            <Route path="/*" element={<Navigate to="/" />} /> {/* Redirect to main page for unknown routes */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
