import React from 'react';
import { Form, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import PokemonInfo from '../home/pokemonInfo';


const Hero = () => {
  const [pokemon, setPokemon] = React.useState(null);
  const [search, setSearch] = React.useState('');
  const [fullscreen, setFullscreen] = React.useState(true);

  const [show, setShow] = React.useState(false);

  const clickInfo = (event) => {
    setFullscreen(event);

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(search === "") {
        setPokemon(null);
        alert("Please enter a Pokemon ID or name before searching.");
    } else {
        fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
          .then((response) => response.json())
          .then((data) => setPokemon(data));
    }
    
};


  return (
    <div className="d-flex justify-content-center align-items-center text-center">
      <Container className='containerHero'>
        <Row>
          <Col>

            <img src="hero1gcta.png" data-aos="zoom-in-down" data-aos-duration="2000" alt="Pokemon Logo"/>

          </Col>
        </Row>
        <Row>
          <Col>
            <Form className='hero1Search text-center d-flex justify-content-center align-items-center' onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Control className='hero1Control rounded-5 px-4 border-primary'
                  type="text"
                  placeholder="Search by Pokemon ID or by Name..."
                  value={search}
                  onChange={(event) => setSearch(String(event.target.value).toLowerCase())}
                  data-aos="fade-right"
                  data-aos-duration="2000"
                />
              </Form.Group>
              <Button className='hero1SearchButton rounded-5' type="submit" onClick={() => { clickInfo(true); setShow(true); }}
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <img className='hero1Pokeball' src="pokeball.png" alt=""
                />
                Search
              </Button>
            </Form>
          </Col>
        </Row>
        {pokemon && (
          <Row>
            <Col>
              <Modal
                show={show}
                fullscreen={fullscreen}
                onHide={() => setShow(false)}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='text-white'>
                <Modal.Header closeButton className='bg-primary border-0'>
                  <Modal.Title>
                    <h1 className='aboutUsHeader'>
                      {pokemon.name.charAt(0).toUpperCase() +
                        pokemon.name.slice(1)}
                    </h1>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className='allBG p-5'>
                  {pokemon ? (
                    <>
                      <PokemonInfo component={'span'} pokemonName={pokemon.name} />

                    </>
                  ) : (
                    <h3>Pokemon not found</h3>
                  )}
                </Modal.Body>

              </Modal>



            </Col>
          </Row>
        )}
      </Container>
    </div >
  );
};

export default Hero;

