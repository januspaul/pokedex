import React from 'react';

const PokemonTypeFilter = ({ types, onChange }) => {
  return (
    <select onChange={onChange}>
      <option value="">All</option>
      {types.map((type) => (
        <option key={type} value={type}>{type}</option>
      ))}
    </select>
  );
};

export default PokemonTypeFilter;
