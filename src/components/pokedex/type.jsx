import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import PokemonList from './typelist';

const PokemonTypes = () => {
  const types = ['normal', 'fire', 'water', 'electric', 'grass', 'ice', 'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'];
  const [show, setShow] = useState({});
  const handleClose = (type) => setShow((prevShow) => ({ ...prevShow, [type]: false }));
  const handleShow = (type) => setShow((prevShow) => ({ ...prevShow, [type]: true }));


  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {types.map((type) => (
        <div>
          <Button key={type} onClick={() => handleShow(type)}>{type}</Button>
          <Modal show={show[type]} size="fullscreen" key={type} onHide={() => handleClose(type)}>
            <Modal.Header closeButton>
              <Modal.Title >{type}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <PokemonList type={type}></PokemonList>
            </Modal.Body>
          </Modal>
        </div>
      ))}
    </div>
  );
};

export default PokemonTypes;

