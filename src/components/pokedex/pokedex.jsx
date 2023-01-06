import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import PokemonCard from './card';
import InfiniteScroll from "react-infinite-scroll-component";

const SORT_OPTIONS = {
  NUMBER_DESC: 'NUMBER_DESC',
  NUMBER_ASC: 'NUMBER_ASC',
  NAME_ASC: 'NAME_ASC',
  NAME_DESC: 'NAME_DESC',
};

const PokemonCards = () => {
  const [pokemons, setPokemons] = useState([]);
  const [sortOption, setSortOption] = useState(SORT_OPTIONS.NUMBER_ASC);
  const [limit, setLimit] = useState(12);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=` + limit
      );
      setPokemons(response.data.results);
    }

    getData();
  }, [limit]);


  const loadMore = () => {
    setLimit(limit + 12)
  }

  const handleSortChange = event => {
    setSortOption(event.target.value);
  };

  const sortedPokemon = pokemons.sort((a, b) => {
    switch (sortOption) {
      case SORT_OPTIONS.NUMBER_ASC:
        return a.url.match(/\/(\d+)\//)[1] - b.url.match(/\/(\d+)\//)[1];
      case SORT_OPTIONS.NUMBER_DESC:
        return b.url.match(/\/(\d+)\//)[1] - a.url.match(/\/(\d+)\//)[1];
      case SORT_OPTIONS.NAME_ASC:
        return a.name.localeCompare(b.name);
      case SORT_OPTIONS.NAME_DESC:
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  const filteredPokemon = sortedPokemon
    .filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()))

    

  return (
    <div className="ps-5">
      <Container className="pokedexContainer">
        <input
          type="text"
          placeholder="Search Pokémon"
          value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
        />

        <label htmlFor="region-select" className="text-white px-5">Region:</label>
        <select id="region-select">
          <option value="kanto">Kanto</option>
          <option value="johto">Johto</option>
          <option value="hoenn">Hoenn</option>
          <option value="sinnoh">Sinnoh</option>
          <option value="unova">Unova</option>
          <option value="kalos">Kalos</option>
          <option value="alola">Alola</option>
          <option value="galar">Galar</option>
        </select>



       


        <div className="py-5">
          <label htmlFor="sort-select" className="text-white px-5">Sort by:</label>
          <select id="sort-select" onChange={handleSortChange}>
            <option value={SORT_OPTIONS.NUMBER_ASC}>ID ASC</option>
            <option value={SORT_OPTIONS.NUMBER_DESC}>ID DESC</option>
            <option value={SORT_OPTIONS.NAME_ASC}>Name ASC</option>
            <option value={SORT_OPTIONS.NAME_DESC}>Name DESC</option>
          </select>
        </div>
        <InfiniteScroll
          dataLength={pokemons.length}
          next={loadMore}
          hasMore={true}
          loader={<h1 className="text-white">Loading....</h1>}
        >
          <div className="row d-flex justify-content-center ps-5">
            {filteredPokemon.map((pokemon) => (
              <div className="col-3" key={pokemon.id}>
                <PokemonCard component={'span'} pokemonName={pokemon.name} />
              </div>
            ))}
          </div>
        </InfiniteScroll>

      </Container>
    </div>
  );
};

export default PokemonCards;