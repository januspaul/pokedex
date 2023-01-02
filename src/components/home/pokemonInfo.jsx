import React, { useState, useEffect } from 'react';
import PokemonFlavorText from './pokemonDescription';


function PokemonInfo(props) {
  const [types, setTypes] = useState([]);
  const [id, setID] = useState();
  const [sprites, setSprites] = useState();
  const [pokemonName, setPokemonName] = useState();
  const [pokemonHeight, setPokemonHeight] = useState();
  const [pokemonWeight, setPokemonWeight] = useState();
  const [stats, setStats] = useState({});
  const [abilities, setAbilities] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemonName}`);
      const data = await response.json();
      const statsData = data.stats.reduce((obj, stat) => {
        obj[stat.stat.name] = stat.base_stat;
        return obj;
      }, {});
      setStats(statsData);
      setTypes(data.types);
      setID(data.id);
      setPokemonName(data.name);
      setPokemonHeight(data.height);
      setPokemonWeight(data.weight);
      setSprites(data.sprites.other['official-artwork'].front_default);
      setAbilities(data.abilities);
    }
    fetchData();
  }, [props.pokemonName]);

  return (
    <div>
      <div className="row">
        <div className="col">
          #{id}
        </div>

      </div>
      <div className="row">
        <div className="col">
          <img className='img-fluid d-block' src={sprites} alt={props.pokemonName} />
        </div>
        <div className="col">
          {props.pokemonName.charAt(0).toUpperCase() + props.pokemonName.slice(1)}
          <PokemonFlavorText textPokemon={pokemonName} />
        </div>
        <div className="row">
          Type: {types.map(type => (
          <div key={type.type.name}>{type.type.name}</div>
        ))}
        </div>
        <div className="row">
          Height: {pokemonHeight}
        </div>
        <div className="row">
          Weight: {pokemonWeight}
        </div>
        <div>
          <h4>Stats:</h4>
          {Object.keys(stats).map(stat => (
            <div key={stat}>{stat}: {stats[stat]}</div>
          ))}
        </div>
        <div>
        <h4>Abilities:</h4>
        {abilities.map(ability => (
          <div key={ability.ability.name}>{ability.ability.name}</div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default PokemonInfo;