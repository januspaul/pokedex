import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container} from "react-bootstrap";
import PokemonCard from './card';

const SORT_OPTIONS = {
  NAME_ASC: 'NAME_ASC',
  NAME_DESC: 'NAME_DESC',
  NUMBER_ASC: 'NUMBER_ASC',
  NUMBER_DESC: 'NUMBER_DESC',
};


const PokemonCards = () => {
  const [pokemons, setPokemons] = useState([]);
  const [typeFilter, setTypeFilter] = useState('');
   const [sortOption, setSortOption] = useState(SORT_OPTIONS.NAME_ASC);
 
 

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=905`
      );
      setPokemons(response.data.results);
    
    }

    getData();
  }, []);

   const handleSortChange = event => {
    setSortOption(event.target.value);
  };

   const handleTypeFilterChange = event => {
    setTypeFilter(event.target.value);
  };

   let sortedPokemon = pokemons.sort((a, b) => {
    if (sortOption === SORT_OPTIONS.NAME_ASC) {
      return a.name.localeCompare(b.name);
    } else if (sortOption === SORT_OPTIONS.NAME_DESC) {
      return b.name.localeCompare(a.name);
    } else if (sortOption === SORT_OPTIONS.NUMBER_ASC) {
      return a.url.match(/\/(\d+)\//)[1] - b.url.match(/\/(\d+)\//)[1];
    } else if (sortOption === SORT_OPTIONS.NUMBER_DESC) {
      return b.url.match(/\/(\d+)\//)[1] - a.url.match(/\/(\d+)\//)[1];
    }
  });

 if (typeFilter) {
    sortedPokemon = sortedPokemon.filter(pokemon => {
      // Fetch the details for each Pokemon
      return fetch(pokemon.url)
        .then(response => response.json())
        .then(data => {
          // Check if the Pokemon has the selected type
          return data.types.some(type => type.type.name === typeFilter);
        });
    });
  }

  

  return (
    <Container>
      <div className="row">        
        {pokemons.map((pokemon) => (
          <div className="col-3" key={pokemon.name}>
           
                <PokemonCard component={'span'} pokemonName={pokemon.name} />
               
          </div>
        ))}
      </div>
         <label htmlFor="type-filter-select">Filter by type:</label>
      <select id="type-filter-select" onChange={handleTypeFilterChange}>
        <option value="">All types</option>
        <option value="normal">Normal</option>
        <option value="fighting">Fighting</option>
        <option value="flying">Flying</option>
        <option value="poison">Poison</option>
        <option value="ground">Ground</option>
        <option value="rock">Rock</option>
        <option value="bug">Bug</option>
        <option value="ghost">Ghost</option>
        <option value="steel">Steel</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="grass">Grass</option>
        <option value="electric">Electric</option>
        <option value="psychic">Psychic</option>
        <option value="ice">Ice</option>
        <option value="dragon">Dragon</option>
        <option value="dark">Dark</option>
        <option value="fairy">Fairy</option>
        <option value="shadow">Shadow</option>
      </select>

      <div>
      <label htmlFor="sort-select">Sort by:</label>
      <select id="sort-select" onChange={handleSortChange}>
        <option value={SORT_OPTIONS.NAME_ASC}>Name (A-Z)</option>
        <option value={SORT_OPTIONS.NAME_DESC}>Name (Z-A)</option>
        <option value={SORT_OPTIONS.NUMBER_ASC}>Number (low to high)</option>
        <option value={SORT_OPTIONS.NUMBER_DESC}>Number (high to low)</option>
      </select>
    </div>

    </Container>
  );
};

export default PokemonCards;