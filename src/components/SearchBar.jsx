import React, { useState } from 'react';

const SearchBar = ({ personalities, onSelectPersonality }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    const found = personalities.find(p => p.name.toLowerCase().includes(query.toLowerCase()));
    if (found) {
      onSelectPersonality(found);
      setQuery('');
    } else {
      alert('Personality not found');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div style={{ position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: 1000 }}>
      <input
        type="text"
        placeholder="Search for a historical figure..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        style={{ padding: '10px', width: '300px', fontSize: '16px' }}
      />
      <button onClick={handleSearch} style={{ padding: '10px', marginLeft: '10px' }}>Search</button>
    </div>
  );
};

export default SearchBar;
