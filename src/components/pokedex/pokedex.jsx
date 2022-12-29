import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import PokemonCard from './card';


const SORT_OPTIONS = {
  NUMBER_DESC: 'NUMBER_DESC',
  NUMBER_ASC: 'NUMBER_ASC',
  NAME_ASC: 'NAME_ASC',
  NAME_DESC: 'NAME_DESC',
};



const PokemonCards = () => {
  const [pokemons, setPokemons] = useState([]);
  const [sortOption, setSortOption] = useState(SORT_OPTIONS.NAME_ASC);




  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=100`
      );
      setPokemons(response.data.results);

    }

    getData();
  }, []);

  const handleSortChange = event => {
    setSortOption(event.target.value);
  };



  const sortedPokemon = pokemons.sort((a, b) => {
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

 

  return (
    <Container>

      <div className="row">
        {sortedPokemon.map((pokemon) => (
          <div className="col-3" key={pokemon.name}>
            
              <PokemonCard component={'span'} pokemonName={pokemon.name} />
           

          </div>
        ))}
      </div>
      

      <div>
        <label htmlFor="sort-select">Sort by:</label>
        <select id="sort-select" onChange={handleSortChange}>
          <option value={SORT_OPTIONS.NAME_ASC}>Name (A-Z)</option>
          <option value={SORT_OPTIONS.NAME_DESC}>Name (Z-A)</option>
          <option value={SORT_OPTIONS.NUMBER_ASC}>Number (low to high)</option>
          <option value={SORT_OPTIONS.NUMBER_DESC}>Number (high to low)</option>
        </select>
      </div>
      <div>
      </div>

    </Container>
  );
};

export default PokemonCards;