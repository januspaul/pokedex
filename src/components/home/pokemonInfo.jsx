import React, { useState } from 'react';
import { fetch } from 'whatwg-fetch';
import { ProgressBar } from 'react-bootstrap';
import '../reusable/style.css';


function PokemonInfo(props) {
  const [types, setTypes] = useState([]);
  const [id, setID] = useState();

  const [pokemonHeight, setPokemonHeight] = useState();
  const [pokemonWeight, setPokemonWeight] = useState();
  const [stats, setStats] = useState({});
  const [abilities, setAbilities] = useState([]);
  const [flavorText, setFlavorText] = useState();
  const [moves, setMoves] = useState([]);
  const [sprites, setSprites] = useState();

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
    setPokemonHeight(data.height);
    setPokemonWeight(data.weight);
    setSprites(data.sprites.other['official-artwork'].front_default);
    setAbilities(data.abilities);
    setMoves(data.moves);
    await fetchFlavorText();
  }
  fetchData();

  async function fetchFlavorText() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${props.pokemonName}`);
    const data = await response.json();
    const flavorTextEntries = data.flavor_text_entries;
    const englishFlavorText = flavorTextEntries.find(entry => entry.language.name === 'en');
    const flavorText = englishFlavorText.flavor_text;
    setFlavorText(flavorText);
  }



  return (
    <div className=''>
      <div className="container">
        <div className="row pb-3">
          <div className="col-md-1 text-center">
            <h2 className='bg-danger rounded aboutUsHeader'>#{id}</h2>
          </div>
        </div>
        <hr />
        <div className="row pt-3">
          <div className="col-md-6 align-items-center text-center">
            <img src={sprites} alt={props.pokemonName} className="img-fluid"/>
          </div>
          <div className="col-md-6 pb-3">
            <div className="row hero1SearchButton">

            </div>
            <div className="row">
              <div className="col-md-12">
                <h3 className="aboutUsHeader">{flavorText}</h3>
              </div>
            </div>
            <div className="row pt-3">
              <div className="col-md-4">
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
              <div className="col-md-4">
                <div>
                  <h5 className='text-warning aboutUsHeader'> Height: </h5>
                </div>
                <div>
                  <p className='hero1SearchButton'>{pokemonHeight} m</p>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <h5 className='text-warning aboutUsHeader'> Weight: </h5>
                </div>
                <div>
                  <p className='hero1SearchButton'>{pokemonWeight} kg</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div>
                  <h5 className='text-warning aboutUsHeader'> Moves: </h5>
                </div>
                <div>
                  <p className='hero1SearchButton'>
                    {moves.slice(0, 5).map(move => (
                      <div key={move.move.name}>{move.move.name}</div>
                    ))}</p>
                </div>
              </div>
              <div className="col-md-4">
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
              <div className="col-md-6">
                <div>
                  <h5 className='text-warning aboutUsHeader'> Stats: </h5>
                </div>
              </div>
            </div>
            {Object.keys(stats).map(stat => (
              <div className="row">
                <div className="col-md-3" key={stat}>
                  {stat}:
                </div>
                <div className="col-md-8">
                  <ProgressBar now={stats[stat]} label={stats[stat]} variant={stats[stat] < 45 ? 'danger' : (stats[stat] < 85 ? 'warning text-dark' : 'success')} />
                </div>
              </div>
            ))}
          </div>

        </div>

        <hr />
      </div>

    </div>
  );
}

export default PokemonInfo;