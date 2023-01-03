import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonList = (props) => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/type/${props.type}`);
        setPokemon(response.data.pokemon);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [props.type]);

  return (
    <ul>
      {pokemon.map((pokemon) => (
        <li key={pokemon.pokemon.name}>{pokemon.pokemon.name}</li>
      ))}
    </ul>
  );
};

export default PokemonList;
