import React, { useState, useEffect } from 'react';
import PokemonFlavorText from './pokemonDescription';
import { ProgressBar } from 'react-bootstrap';


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
    <div className=''>
      <div className="container">
        <div className="row pb-3">
          <div className="col-1 text-center">
            <h2 className='bg-danger rounded aboutUsHeader'>#{id}</h2>
          </div>
        </div>
        <hr />
        <div className="row pt-3">
          <div className="col-6 text-center">
            <img src={sprites} alt={props.pokemonName} />
          </div>
          <div className="col-6">
            <div className="row hero1SearchButton">
              <PokemonFlavorText textPokemon={pokemonName} />
            </div>
            <div className="row pt-3">
              <div className="col-4">
                <div>
                  <h5 className='text-warning aboutUsHeader'> Type: </h5>
                </div>
                <div>
                  <p className='hero1SearchButton'>
                    {types.map(type => (
                      <div key={type.type.name}>{type.type.name}</div>
                    ))}</p>
                </div>
              </div>
              <div className="col-4">
                <div>
                  <h5 className='text-warning aboutUsHeader'> Height: </h5>
                </div>
                <div>
                  <p className='hero1SearchButton'>{pokemonHeight}</p>
                </div>
              </div>
              <div className="col-4">
                <div>
                  <h5 className='text-warning aboutUsHeader'> Weight: </h5>
                </div>
                <div>
                  <p className='hero1SearchButton'>{pokemonWeight}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div>
                  <h5 className='text-warning aboutUsHeader'> Abilities: </h5>
                </div>
                <div>
                  <p className='hero1SearchButton'>
                    {abilities.map(ability => (
                      <div key={ability.ability.name}>{ability.ability.name}</div>
                    ))}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div>
                  <h5 className='text-warning aboutUsHeader'> Stats: </h5>
                </div>
                <div>
                  <p className='hero1SearchButton'>
                    {Object.keys(stats).map(stat => (
                      <div key={stat}>{stat}:
                        <ProgressBar animated now={stats[stat]} label={stats[stat]} variant={stats[stat] < 30 ? 'danger' : (stats[stat] < 70 ? 'warning' : 'success')}/>
                      </div>
                    ))}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>

    </div>
  );
}

export default PokemonInfo;