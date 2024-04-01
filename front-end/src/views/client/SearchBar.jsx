import React, { useState } from 'react';
import './searchBar.css'
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(`Searching for ${searchTerm} in ${location}`);
    // Implement your search functionality here
  };

  return (
    <div>
    <form className='myForm' onSubmit={handleSearch}>
      <input className='input1'
        type="text" 
        placeholder="Job title, keywords, or company" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <input 
      className='input2'
        type="text" 
        placeholder="City, state, zip code, or 'remote'" 
        value={location} 
        onChange={(e) => setLocation(e.target.value)} 
      />
      <button type="submit">Find Jobs</button>
    </form>
    </div>
    
  );
};

export default SearchBar;
