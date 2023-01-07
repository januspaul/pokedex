import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import PokemonCard from './card';
import InfiniteScroll from "react-infinite-scroll-component";
import { TransitionGroup, CSSTransition } from "react-transition-group";

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
    setLimit(limit + 4)
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

        <div className="py-5">
          <label htmlFor="sort-select" className="text-white">Sort by:</label>
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
          loader={
            <h1 className="mx-auto text-center text-white">Loading...</h1>
          }
        >
          <TransitionGroup>
            <div className="row d-flex justify-content-center ps-5" style={{ display: 'flex', flexDirection: 'row' }}>
              {filteredPokemon.map((pokemon) => (
                <CSSTransition key={pokemon.id} timeout={200} classNames="fade">
                  <div className="col-3">
                    <PokemonCard  component={'span'} pokemonName={pokemon.name} />
                  </div>
                </CSSTransition>
              ))}
            </div>
          </TransitionGroup>
        </InfiniteScroll>
      </Container>
    </div>
  );
};
export default PokemonCards;