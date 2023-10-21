import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';

const Search = ({ handleSearchNote, handleCloseSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
  setSearchTerm(event.target.value);
  handleSearchNote(event.target.value);
};

  return (
    <div className='search-modal'>
      <div className='search-modal-content'>
        <MdSearch className='search-icons' size='1.3em' strokeWidth='0.08rem' />
        <input
          value={searchTerm}
          onChange={handleInputChange}
          type='text'
          placeholder='Cmd + K...'
        />
        <button onClick={handleCloseSearch}>Close</button>
      </div>
    </div>
  );
};

export default Search;
