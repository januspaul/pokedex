import React, { useState, useEffect } from "react";
import axios from "axios";

const PokeAPI = ({ search }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function getData() {
      if (search) {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${search}`
        );
        setPokemon(response.data);
      } else {
        setPokemon(null);
      }
    }

    getData();
  }, [search]);

  if (!pokemon) {
    return <div>Enter a Pokemon name to search for it using the PokeAPI</div>;
  }

  return (
    <div>
      <img src={pokemon.sprites.front_default} alt="" />
      <div className="name">{pokemon.name.toUpperCase()}</div>
      <div className="type">{pokemon.types[0].type.name}</div>

      <div className="data">
        <p>ID: {pokemon.id}</p>
        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>
        <p>Base Experience: {pokemon.base_experience}</p>
        <p>Abilities:</p>
        <ul>
          {pokemon.abilities.map((ability) => (
            <li key={ability.ability.name}>{ability.ability.name}</li>
          ))}
        </ul>
        <p>Types:</p>
        <ul>
          {pokemon.types.map((type) => (
            <li key={type.type.name}>{type.type.name}</li>
          ))}
        </ul>
        <p>Moves:</p>
        <ul>
          {pokemon.moves.map((move) => (
            <li key={move.move.name}>{move.move.name}</li>
          ))}
        </ul>
        <p>Stats:</p>
        <ul>
          {pokemon.stats.map((stat) => (
            <li key={stat.stat.name}>
              {stat.stat.name}: {stat.base_stat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokeAPI;
