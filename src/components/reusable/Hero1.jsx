import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';


const Hero = () => {
  const [pokemon, setPokemon] = React.useState(null);
  const [search, setSearch] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  };

  return (
    <div className="hero1BG d-flex justify-content-center align-items-center wh-100 text-center vh-100" style={{
      backgroundImage: `url(${process.env.PUBLIC_URL + '/hero1.png'})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize:'100%',


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
              <Button className='hero1SearchButton rounded-5' type="submit">
                <img className='hero1Pokeball' src="pokeball.png" alt="" />
                Search
              </Button>
            </Form>
          </Col>
        </Row>
        {pokemon && (
          <Row>
            <Col>
              <h2>{pokemon.name}</h2>
              <p>Type: {pokemon.types[0].type.name}</p>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Hero;