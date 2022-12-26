import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button, Container, Form, Dropdown } from "react-bootstrap";

const PokemonCards = () => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [typeFilter, setTypeFilter] = useState("");
  const [abilityFilter, setAbilityFilter] = useState("");
  const [sizeFilter, setSizeFilter] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=12&offset=${(page - 1) * 12}`
      );
      setPokemons(response.data.results);
      setTotalPages(Math.ceil(response.data.count / 12));
    }

    getData();
  }, [page, typeFilter, abilityFilter, sizeFilter, sort]);

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

  const handleTypeFilterChange = (event) => {
    setTypeFilter(event.target.value);
  };

  const handleAbilityFilterChange = (event) => {
    setAbilityFilter(event.target.value);
  };

  const handleSizeFilterChange = (event) => {
    setSizeFilter(event.target.value);
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
};

const handleApplyFilters = () => {
setPage(1);
  };

  let filteredPokemons = pokemons;

  if (typeFilter) {
    filteredPokemons = filteredPokemons.filter((pokemon) => {
      return pokemon.types.some((type) => type.type.name === typeFilter);
    });
  }

  if (abilityFilter) {
    filteredPokemons = filteredPokemons.filter((pokemon) => {
      return pokemon.abilities.some(
        (ability) => ability.ability.name === abilityFilter);
    });
  }

  if (sizeFilter === "small") {
    filteredPokemons = filteredPokemons.filter((pokemon) => {
      return pokemon.height < 3;
    });
  } else if (sizeFilter === "medium") {
    filteredPokemons = filteredPokemons.filter((pokemon) => {
      return pokemon.height >= 3 && pokemon.height < 6;
    });
  } else if (sizeFilter === "large") {
    filteredPokemons = filteredPokemons.filter((pokemon) => {
      return pokemon.height >= 6;
    });
  }

  if (sort === "ascending") {
    filteredPokemons.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  } else if (sort === "descending") {
    filteredPokemons.sort((a, b) => {
      if (a.name > b.name) {
        return -1;
      }
      if (a.name < b.name) {
        return 1;
      }
      return 0;
    });
  }

  return (
    <Container>
      <Form>
        <Form.Group controlId="typeFilter">
          <Form.Label>Type</Form.Label>
          <Form.Control as="select" onChange={handleTypeFilterChange}>
            <option value="">All</option>
            <option value="normal">Normal</option>
            <option value="fighting">Fighting</option>
            <option value="flying">Flying</option>
            <option value="poison">Poison</option>
            <option value="ground">Ground</option>
            <option value="rock">Rock</option>
            <option value="bug">Bug</option>
            <option value="ghost">Ghost</option>
            <option value="steel">Steel</option>
            <option value="fire">Fire</option>
            <option value="water">Water</option>
            <option value="grass">Grass</option>
            <option value="electric">Electric</option>
            <option value="psychic">Psychic</option>
            <option value="ice">Ice</option>
            <option value="dragon">Dragon</option>
            <option value="dark">Dark</option>
            <option value="fairy">Fairy</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="abilityFilter">
          <Form.Label>Ability</Form.Label>
          <Form.Control as="select" onChange={handleAbilityFilterChange}>
            <option value="">All</option>
            <option value="overgrow">Overgrow</option>
            <option value="torrent">Torrent</option>
            <option value="blaze">Blaze</option>
            <option value="swarm">Swarm</option>
            <option value="hustle">Hustle</option>
            <option value="pickup">Pickup</option>
            <option value="huge-power">Huge Power</option>
            <option value="pure-power">Pure Power</option>
            <option value="tangled-feet">Tangled Feet</option>
            <option value="unburden">Unburden</option>
            <option value="multitype">Multitype</option>
            <option value="intimidate">Intimidate</option>
            <option value="justified">Justified</option>
            <option value="lightning-rod">Lightning Rod</option>
            <option value="sap-sipper">Sap Sipper</option>
            <option value="honey-gather">Honey Gather</option>
            <option value="water-veil">Water Veil</option>
            <option value="damp">Damp</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="sizeFilter">
          <Form.Label>Size</Form.Label>
          <Form.Check
            type="radio"
            label="Small"
            name="sizeFilter"
            value="small"
            onChange={handleSizeFilterChange}
          />
          <Form.Check
            type="radio"
            label="Medium"
            name="sizeFilter"
            value="medium"
            onChange={handleSizeFilterChange}
          />
          <Form.Check
            type="radio"
            label="Large"
            name="sizeFilter"
            value="large"
            onChange={handleSizeFilterChange}
          />
        </Form.Group>
        <Form.Group controlId="sort">
          <Form.Label>Sort</Form.Label>
          <Form.Control as="select" onChange={handleSortChange}>
            <option value="">None</option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </Form.Control>
        </Form.Group>
      </Form>
      <div className="row">
        {filteredPokemons.map((pokemon) => (
          <div className="col-3" key={pokemon.name}>
            <Card style={{ width: "200px" }} className="mb-3">
              <Card.Img
                variant="top"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  pokemon.url.split("/")[6]
                }.png`}
                alt={pokemon.name}
              />
              <Card.Body>
                <Card.Title>
                  {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </Card.Title>
                <Card.Text>#{pokemon.url.split("/")[6]}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <Button onClick={handlePrevious}>Previous</Button>
      <Button onClick={handleNext}>Next</Button>
    </Container>
  );
};

export default PokemonCards;
