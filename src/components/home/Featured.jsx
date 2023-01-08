import React from "react";
import { Carousel, CardGroup} from "react-bootstrap";
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
        const randomId = Math.floor(Math.random() * 950) + 1;
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
    <div className="featMargin">
      
      <div className="container">
      <hr className="text-white"/>
        <div className="row">
          <div className="col-12">
            <h3 className="text-styleFeatured aboutUsHeader">
              <span className="lineFeatured"></span>Featured Pokemon
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Carousel
              activeIndex={currentSlide}
              onSelect={handleSlideChange}
              className="pb-5">
              {[...Array(3)].map((_, index) => (
                <Carousel.Item key={index}>
                  <CardGroup>
                    <div className="container pt-5 px-5">
                      <div className="row">
                        {pokemons.map((pokemon) => (
                          <div className="col-3">
                            <div>
                            <PokemonCard pokemonName={pokemon.name} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardGroup>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
        <hr className="text-white"/>
      </div>

    </div>
  );
};

export default Featured;
