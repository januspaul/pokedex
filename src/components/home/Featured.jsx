import React from "react";
import { Carousel, CardGroup, Container, Row, Col } from "react-bootstrap";
import PokemonCard from "../pokedex/card";
const Featured = () => {
  const [pokemons, setPokemons] = React.useState([]);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const handleSlideChange = (index) => {
    setPokemons([]);
    setCurrentSlide(index);
  };

  React.useEffect(() => {
    const loadPokemons = () => {
      for (let i = 0; i <= 3; i++) {
        const randomId = Math.floor(Math.random() * 807) + 1;
        fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
          .then((response) => response.json())
          .then((data) =>
            setPokemons((prevPokemons) => [...prevPokemons, data])
          );
      }
    };
    loadPokemons();
  }, [currentSlide]);

  return (
    <div
      style={{ backgroundColor: "#6423B5" }}
      className="featuredContainer p-5"
    >
      <Container fluid>
        <div>
          <h3 className="text-styleFeatured aboutUsHeader">
            <span className="lineFeatured"></span>Featured Pokemon
          </h3>
        </div>

        <Carousel
          activeIndex={currentSlide}
          onSelect={handleSlideChange}
          className="pb-5"
        >
          {[...Array(3)].map((_, index) => (
            <Carousel.Item key={index}>
              <CardGroup className="vw-100">
                {pokemons.map((pokemon) => (
                  <Row key={pokemon.id}>
                    <Col>
                      <PokemonCard pokemonName={pokemon.name} />
                    </Col>
                  </Row>
                ))}
              </CardGroup>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

export default Featured;
