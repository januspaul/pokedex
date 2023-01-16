import React, { useState, useEffect } from 'react';
import { Card, Button, Modal } from "react-bootstrap";
import PokemonInfo from '../home/pokemonInfo';
import classNames from 'classnames';


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

    <div className="container my-4 px-4">
      <div className="row">
        <div className="col-12">
          <Button className='pokedeButton text-dark p-0 bg-transparent border-0 bgCardHover bgpokedexCards' data-aos="flip-left" onClick={clickInfo}>
            <Card className="bg-transparent border-0 m-0 p-0">
              <div className="">
                <Card.Img variant="top" src={sprites} alt={props.pokemonName} />
                <Card.Body>

                  <Card.Title className='text-center pt-3 hero1SearchButton text-warning'>

                    {props.pokemonName.charAt(0).toUpperCase() + props.pokemonName.slice(1)}
                  </Card.Title>
                  <Card.Text className='aboutUsHeader'>
                    <div className="row">
                      <div className="col text-center text-white">
                        #{id}
                      </div>
                    </div>

                    <div className='row pt-1 align-items-center d-flex justify-content-center'>
                      {types.map(type => (
                        <div className={classNames('col-5 text-center pb-1 rounded-pill mx-1', {
                          'typebg-normal': type === 'normal',
                          'typebg-dragon': type === 'dragon',
                          'typebg-ice': type === 'ice',
                          'typebg-grass': type === 'grass',
                          'typebg-bug': type === 'bug',
                          'typebg-rock': type === 'rock',
                          'typebg-water': type === 'water',
                          'typebg-fighting': type === 'fighting',
                          'typebg-ground': type === 'ground',
                          'typebg-fire': type === 'fire',
                          'typebg-steel': type === 'steel',
                          'typebg-flying': type === 'flying',
                          'typebg-psychic': type === 'psychic',
                          'typebg-electric': type === 'electric',
                          'typebg-dark': type === 'dark',
                          'typebg-ghost': type === 'ghost',
                          'typebg-fairy': type === 'fairy',
                          'typebg-poison': type === 'poison',
                          
                        })}>
                          {type}
                        </div>
                      ))}
                    </div>

                  </Card.Text>
                </Card.Body>
              </div>
            </Card>
          </Button>
        </div>
      </div>

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