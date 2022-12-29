import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './card';

const PokemonList = ({ type }) => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://pokeapi.co/api/v2/pokemon');
      setPokemon(result.data.results);
    };
    fetchData();
  }, []);

  // Filter the list of Pokemon by type
  const filteredPokemon = pokemon.filter(p => p.type === type);

  return (
    <div>
      {filteredPokemon.map(p => (
        <div key={p.id}><PokemonCard  pokemonName={p.name} /></div>
      ))}
    </div>
  );
};

export default PokemonList;