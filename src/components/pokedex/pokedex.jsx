import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardGroup, Button } from "react-bootstrap";

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
    <div>
      <CardGroup style={{ justifyContent: "space-around" }}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.name} style={{ width: "200px" }} className="mb-3">
            <Card.Body>
              <Card.Title>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</Card.Title>
              <Card.Text>#{pokemon.url.split("/")[6]}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
      <Button onClick={handlePrevious}>Previous</Button>
      <Button onClick={handleNext}>Next</Button>
    </div>
  );
};

export default PokemonCards;
