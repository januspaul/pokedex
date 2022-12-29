import React, { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";

function PokemonInfo(props) {
  const [type, setType] = useState();
  const [id, setID] = useState();
  const [sprites, setSprites] = useState();
  

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemonName}`);
      const data = await response.json();
      setType(data.types[0].type.name);
      setID(data.id);
      setSprites(data.sprites.other["official-artwork"].front_default);
    }
    fetchData();
  }, [props.pokemonName]);

  return (
    <div>
      <Container>
        <div className="row">
          <div className="col">
            <img variant="top" src={sprites} alt={props.pokemonName} />
          </div>
          <div className="col">
            {props.pokemonName.charAt(0).toUpperCase() + props.pokemonName.slice(1)}
          </div>
        </div>
        <div className="row">
          <div className="col">
            #{id}
          </div>
          <div className="col">
            {type}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default PokemonInfo;