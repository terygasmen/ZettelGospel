import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ScriptureLibrary() {
  const [scriptures, setScriptures] = useState([]);

  useEffect(() => {
    async function fetchScriptures() {
      try {
        const response = await axios.get('/api/scriptures');
        setScriptures(response.data);
      } catch (error) {
        console.error('Error fetching scriptures:', error);
      }
    }

    fetchScriptures();
  }, []); // Empty dependency array ensures this effect runs once after the initial render

  // Render your scriptures UI using the 'scriptures' state

  return (
    <div className="scripture-library">
      {scriptures.map((scripture) => (
        <div key={scripture._id}>
          {/* Render individual scripture components */}
        </div>
      ))}
    </div>
  );
}

export default ScriptureLibrary;
