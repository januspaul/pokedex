import React from 'react';
import { Form, Button, Container, Row, Col, Modal, ProgressBar } from 'react-bootstrap';


const Hero = () => {
  const [pokemon, setPokemon] = React.useState(null);
  const [search, setSearch] = React.useState('');
  const [show, setShow] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  };

  return (
    <div className="hero1BG d-flex justify-content-center align-items-center text-center wh-100 vh-100" style={{
      backgroundImage: `url(${process.env.PUBLIC_URL + '/hero1.png'})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
    }}>
      <Container className='containerHero'>
        <Row>
          <Col>

            <img src="hero1gcta.png" alt="Pokemon Logo" />

          </Col>
        </Row>
        <Row>
          <Col>
            <Form className='hero1Search text-center d-flex justify-content-center align-items-center' onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Control className='hero1Control rounded-5 px-4 border-primary'
                  type="text"
                  placeholder="Search by Pokemon name..."
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />
              </Form.Group>
              <Button className='hero1SearchButton rounded-5' type="submit" onClick={() => setShow(true)} >
                <img className='hero1Pokeball' src="pokeball.png" alt="" />
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
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                  <Modal.Title>{pokemon.name.charAt(0).toUpperCase() +
                    pokemon.name.slice(1)}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="bgModalHeader">
                    <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
                  </div>
                  <div className="bgModalBody">
                    <div className="row">
                      <div className="col">
                        <h3>Abilities</h3>
                        <ul>{pokemon.abilities.map((ability) => (
                          <li key={ability.ability.name}>{ability.ability.name}</li>
                        ))}</ul>
                      </div>
                      <div className="col">
                        <h3>Type</h3>
                        <ul>{pokemon.types.map((type) => (
                          <li key={type.type.name}>{type.type.name}</li>
                        ))}</ul>
                      </div>
                    </div>
                    <div>
                      <h3>Stats</h3>
                      <ProgressBar variant='success' label={`${pokemon.stats[0].base_stat}%`} now={pokemon.stats[0].base_stat} />
                      <ProgressBar variant='danger' label={`${pokemon.stats[1].base_stat}%`} now={pokemon.stats[1].base_stat} />
                      <ProgressBar variant='primary' label={`${pokemon.stats[2].base_stat}%`} now={pokemon.stats[2].base_stat} />
                    </div>
                  </div>

                </Modal.Body>
                <Modal.Footer>
                  {pokemon.id}
                </Modal.Footer>


              </Modal>
            </Col>
          </Row>
        )}
      </Container>
    </div >
  );
};

export default Hero;