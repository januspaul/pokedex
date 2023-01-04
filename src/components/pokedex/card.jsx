import React, { useState, useEffect } from 'react';
import { Card, Button, Modal} from "react-bootstrap";
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


  return (
    <div className='mb-5'>
          <Button className='pokedeButton text-dark p-0 bg-transparent border-0 bgCardHover bgpokedexCards' onClick={clickInfo}>
          <Card className="bg-transparent border-0 align-items-center m-0 p-0">
            <div className="">
              <Card.Img variant="top" src={sprites} alt={props.pokemonName} />
              <Card.Body className='text-white'>

                <Card.Title className='text-center pt-3'>

                  {props.pokemonName.charAt(0).toUpperCase() + props.pokemonName.slice(1)}
                </Card.Title>
                <Card.Text className='text-center'>
                  <div className="row">
                    <div className="col">
                      #{id}
                    </div>
                  </div>
                  
                  <div className='row'>
                    {types.map(type => (
                       <div className="col pt-1" >{type}</div> 
                    ))}
                  </div>

                </Card.Text>
              </Card.Body>
            </div>
            </Card>
          </Button>
          
      <Modal
        show={showInfo}
        onHide={() => setInfo(false)}
        fullscreen={fullscreen}
        aria-labelledby="contained-modal-title-vcenter"
        centered className='text-white'>

        <Modal.Header closeButton className='bg-primary border-0'>
          <Modal.Title>
            <h1 className='aboutUsHeader'>
            {props.pokemonName.charAt(0).toUpperCase() + props.pokemonName.slice(1)}
            </h1>
            </Modal.Title>
        </Modal.Header>


        <Modal.Body className='allBG p-5'>

         
            <PokemonInfo component={'span'} pokemonName={props.pokemonName} />
         

        </Modal.Body>
      </Modal>

    </div >
  );
}

export default PokemonCard;