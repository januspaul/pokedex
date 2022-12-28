import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Container, Dropdown } from "react-bootstrap";
import PokemonCard from './card';


const PokemonCards = () => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=12&offset=${(page - 1) * 12}`
      );
      setPokemons(response.data.results);
      setTotalPages(Math.ceil(response.data.count / 12));
    }

    getData();
  }, [page]);

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <Container>
      
      <div className="row">
        {pokemons.map((pokemon) => (
          <div className="col-3" key={pokemon.name}>
           
                <PokemonCard component={'span'} pokemonName={pokemon.name} />
               
          </div>
        ))}
      </div>
      <Button onClick={handlePrevious}>Previous</Button>
      <Button onClick={handleNext}>Next</Button>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Type
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item >Fire</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Water</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Grass</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

    </Container>
  );
};

export default PokemonCards;