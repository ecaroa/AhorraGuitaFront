import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    // Aquí puedes realizar la búsqueda
    console.log('Buscando:', searchTerm);
  };

  return (
    <div className="input-group mb-3" style={{ maxWidth: '600px' }}>
      <input
        type="text"
        className="form-control"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="input-group-append">
        <button className="btn btn-primary" type="button" onClick={handleSearch}>
          Buscar
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
