import React, { useState, useEffect } from 'react';
import {Card,Button,Modal} from "react-bootstrap";
import PokemonInfo from '../home/pokemonInfo';

function PokemonCard(props) {
  const [type, setType] = useState();
  const [id,setID]=useState();
  const [sprites,setSprites]=useState();
  const [showInfo, setInfo] = React.useState(false);
   const clickInfo = (event) =>{
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
    <div>
      <Card style={{ width: "200px" }} className="mb-3">
       <Button onClick={clickInfo}> <img className='hero1Pokeball' src="pokeball.png" alt="" /></Button>
              <Card.Img variant="top" src={sprites} alt={props.pokemonName} />
              <Card.Body>
                <Card.Title>
            
                  {props.pokemonName.charAt(0).toUpperCase() + props.pokemonName.slice(1)}
                  </Card.Title>
                <Card.Text>
                  <div className="row">
                    <div className="col">
                      #{id}
                    </div>
                    <div className="col">
                      {type}
                    </div>
                  </div>
                </Card.Text>
              </Card.Body>
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

    </div> 
  );
}

export default PokemonCard;