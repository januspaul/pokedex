import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './card';

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
    <div className="row">
      {pokemon.map((pokemon) => (
        <div className="col-md-3" key={pokemon.pokemon.name}><PokemonCard component={'span'} pokemonName={pokemon.pokemon.name} /></div>
      ))}
    </div>
  );
};

export default PokemonList;
