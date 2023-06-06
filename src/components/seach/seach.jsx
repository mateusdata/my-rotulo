import React, { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
  };

  const handleFocus = () => {
    setExpanded(true);
  };

  const handleBlur = () => {
    setExpanded(false);
  };

  return (
    <div   style={{height:"150px" }}>
      {/*<input
        type="text"
        placeholder="Pesquisar..."
        value={query}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
       
      />
  <button type="button">Pesquisar</button> */}
      </div>
  );
};

export default SearchBar;
