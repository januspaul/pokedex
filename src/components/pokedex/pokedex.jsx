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
  }, [results, typeFilter]);



  return (
    <div>
      <Container className="pokedexContainer">
        <label htmlFor="type-filter">Filter by type:</label>
        <select id="type-filter" value={typeFilter} onChange={e => setTypeFilter(e.target.value)}>
          <option value="">All</option>
          <option value="grass">Grass</option>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="electric">Electric</option>
          <option value="ground">Ground</option>
          <option value="rock">Rock</option>
        </select>
        <div className="row">
          {pokemon
            .filter(p => !typeFilter || p.types[0].type.name === typeFilter)
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