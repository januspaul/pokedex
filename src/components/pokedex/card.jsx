import React, { useState, useEffect } from 'react';
import { Card, Button, Modal } from "react-bootstrap";
import PokemonInfo from '../home/pokemonInfo';

function PokemonCard(props) {
  const [type, setType] = useState();
  const [id, setID] = useState();
  const [sprites, setSprites] = useState();
  const [showInfo, setInfo] = React.useState(false);
  const clickInfo = (event) => {
    setInfo(current => !current);
  }

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
                <div className="row">
                  <div className="col">
                    {type}
                  </div>
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
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter"
        centered>

        <Modal.Body>
          <PokemonInfo component={'span'} pokemonName={props.pokemonName} />
        </Modal.Body>
      </Modal>

    </div >
  );
}

export default PokemonCard;