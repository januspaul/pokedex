import React,{useState} from 'react';
import {Button, Modal} from 'react-bootstrap';

const PokemonTypes = () => {
  const types = ['normal', 'fire', 'water', 'electric', 'grass', 'ice', 'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'];
  const [show, setShow] = useState({});
  const handleClose = (type) => setShow((prevShow) => ({...prevShow, [type]: false}));
  const handleShow = (type) => setShow((prevShow) => ({...prevShow, [type]: true}));

  return (
    <div>
      {types.map((type) => (
        <div>
          <Button key={type} onClick={() => handleShow(type)}>{type}</Button>
          <Modal show={show[type]} key={type} onHide={() => handleClose(type)}>
            <Modal.Header closeButton>
              <Modal.Title >{type}</Modal.Title>
            </Modal.Header>
            <Modal.Body>You clicked {type} </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => handleClose(type)}>
                Close
              </Button>
              <Button variant="primary" onClick={() => handleClose(type)}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      ))}
    </div>
  );
};

export default PokemonTypes

