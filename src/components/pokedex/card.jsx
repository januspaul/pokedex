import React, { useState, useEffect } from 'react';
import { Card, Button, Modal, Container, Badge } from "react-bootstrap";
import PokemonInfo from '../home/pokemonInfo';

function PokemonCard(props) {
  const [types, setTypes] = useState([]);
  const [id, setID] = useState();
  const [sprites, setSprites] = useState();
  const [fullscreen, setFullscreen] = useState(true);
  const [showInfo, setInfo] = React.useState(false);
  const clickInfo = (event) => {
    setFullscreen(event);
    setInfo(current => !current);
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemonName}`);
      const data = await response.json();
      setTypes(data.types.map(type => type.type.name));
      setID(data.id);
      setSprites(data.sprites.other["official-artwork"].front_default);
    }
    fetchData();
  }, [props.pokemonName]);

  const typeColors = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
  };

  return (
    <div className='mb-5'>

      <Card className="bg-transparent border-0 align-items-center ">
        <div className='bgCardHover'>
          <Button className='pokedeButton text-dark p-0 bg-transparent border-0' onClick={clickInfo}>
            <div className="bgpokedexCards">
              <Card.Img variant="top" src={sprites} alt={props.pokemonName} />
              <Card.Body className='text-white'>

                <Card.Title className='text-center'>

                  {props.pokemonName.charAt(0).toUpperCase() + props.pokemonName.slice(1)}
                </Card.Title>
                <Card.Text className='text-center'>
                  <div className="row">
                    <div className="col">
                      #{id}
                    </div>
                  </div>
                  <div className="row"></div>
                  <div>
                    {types.map(type => (
                       <div className="col" >{type}</div> 
                    ))}
                  </div>

                </Card.Text>
              </Card.Body>
            </div>
          </Button>
        </div>
      </Card>

      <Modal
        show={showInfo}
        onHide={() => setInfo(false)}
        fullscreen={fullscreen}
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter"
        centered>

        <Modal.Header closeButton>
          <Modal.Title>{props.pokemonName.charAt(0).toUpperCase() + props.pokemonName.slice(1)}</Modal.Title>
        </Modal.Header>


        <Modal.Body>

          <Container>
            <PokemonInfo component={'span'} pokemonName={props.pokemonName} />
          </Container>

        </Modal.Body>
      </Modal>

    </div >
  );
}

export default PokemonCard;