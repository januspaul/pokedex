import React, { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";
import PokemonCard from './card';


function PokemonCards() {
  const [results, setResults] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const [typeFilter, setTypeFilter] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=950&offset=0');
      const data = await response.json();
      setResults(data.results);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchUrls() {
      const filteredResults = results.filter(async result => {
        if (!typeFilter) return true;
        const response = await fetch(result.url);
        const data = await response.json();
        return data.types[0].type.name === typeFilter;
      });

      const filteredPokemon = [];
      for (const result of filteredResults) {
        const response = await fetch(result.url);
        const data = await response.json();
        filteredPokemon.push(data);
      }

      setPokemon(filteredPokemon);
    }
    fetchUrls();
    if (!typeFilter) {
      setTypeFilter('');
    }

  }, [results, typeFilter]);

  const filteredPokemon = pokemon.filter(p => {
    if (!typeFilter) return true;
    const hasType = p.types.some(t => t.type.name === typeFilter);
    return hasType;
  });



  return (
    <div>
      <Container className="pokedexContainer">
        <label htmlFor="type-filter">Filter by type:</label>
        <select id="type-filter" value={typeFilter} onChange={e => setTypeFilter(e.target.value)}>
          <option value="">All</option>
          <option value="bug">Bug</option>
          <option value="dark">Dark</option>
          <option value="dragon">Dragon</option>
          <option value="electric">Electric</option>
          <option value="fairy">Fairy</option>
          <option value="fighting">Fighting</option>
          <option value="fire">Fire</option>
          <option value="flying">Flying</option>
          <option value="ghost">Ghost</option>
          <option value="grass">Grass</option>
          <option value="ground">Ground</option>
          <option value="ice">Ice</option>
          <option value="normal">Normal</option>
          <option value="poison">Poison</option>
          <option value="psychic">Psychic</option>
          <option value="rock">Rock</option>
          <option value="shadow">Shadow</option>
          <option value="steel">Steel</option>
          <option value="water">Water</option>
        </select>
        <div className="row">
          {filteredPokemon
            .sort((a, b) => a.id - b.id)
            .map(p => (
              <div className="col-3">
                <div key={p.id}>
                  <PokemonCard component={'span'} pokemonName={p.name} />
                </div>
              </div>
            ))}
        </div>
      </Container>
    </div>
  );
}

export default PokemonCards;