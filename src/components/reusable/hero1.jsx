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
    <div className=" text-white text-center img-fluid d-block w-100" style={{ 
      backgroundImage: `url(${process.env.PUBLIC_URL + '/hero1.png'})`,
      backgroundRepeat:'no-repeat',
      backgroundSize: '100%', 
      
}}>
      <Container>
        <Row>
          <Col>
            <img src="pokemonball2.png" style={{width:400,height: 400}} alt="Pokemon Logo" />
            <h1 className="display-4">Find a Pokemon</h1>
            <p className="lead">Enter a Pokemon name to search for it using the PokeAPI</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Control
                  type="text"
                  className="input-text"
                  placeholder="Enter a Pokemon name"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />
              </Form.Group>
              <Button variant="secondary" type="submit" className='m-4'>
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
