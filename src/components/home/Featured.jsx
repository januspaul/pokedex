import React from 'react';
import { Card, CardGroup,Container } from 'react-bootstrap';

const Featured = () => {
  const [pokemons, setPokemons] = React.useState([]);

  React.useEffect(() => {
    for (let i = 1; i < 3; i++) {
      const randomId = Math.floor(Math.random() * 807) + 1;
      fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
        .then((response) => response.json())
        .then((data) => setPokemons((prevPokemons) => [...prevPokemons, data]));
    }
  }, []);

  return (
    <div style={{ backgroundColor: '#6423B5' }} >
      <Container>
        <h1>Featured Pokemon</h1>
      <CardGroup style={{ justifyContent: "space-around" }}>
        {pokemons.map((pokemon) => (
          <div className="row">
            <div className="col-5">
              <Card key={pokemon.id} style={{ width: "200px" }}>
                <Card.Img variant="top" src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
                <Card.Body>
                  <Card.Title>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</Card.Title>
                  <Card.Text>{pokemon.types[0].type.name}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        ))}
      </CardGroup>
      </Container>
    </div>

  );
};

export default Featured;