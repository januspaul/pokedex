import React, { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";
import PokemonCard from './card';
import InfiniteScroll from 'react-infinite-scroll-component';




function PokemonCards() {
  const [results, setResults] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const [typeFilter, setTypeFilter] = useState('');
  const [sortBy, setSortBy] = useState('id'); 
  const [sortOrder, setSortOrder] = useState('asc'); 
  const [searchQuery,setSearchQuery] = useState('');
  const [limit, setLimit] = useState(12);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=`+limit);
      const data = await response.json();
      setResults(data.results);
    }
    fetchData();
  }, [limit]);

  const loadMore = () => {
    setLimit(limit * 2 )
  }

  useEffect(() => {
    async function fetchUrls() {
      const filteredResults = results.filter(async result => {
        if (!typeFilter) return true;
        const response = await fetch(result.url);
        const data = await response.json();
        return data.types[0].type.name === typeFilter;
      });

      const filteredPokemon = [];
      for (const result of filteredResults) {
        const response = await fetch(result.url);
        const data = await response.json();
        filteredPokemon.push(data);
      }

      setPokemon(filteredPokemon);
    }
    fetchUrls();
    if (!typeFilter) {
      setTypeFilter('');
    }

  }, [results, typeFilter]);

  const filteredPokemon = pokemon.filter(p => {
    if (typeFilter && !p.types.some(t => t.type.name === typeFilter)) return false;
    if (searchQuery && !p.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });
  


  return (
    <div>
      <Container className="pokedexContainer">
        <input type="text" value={searchQuery} onChange={e=>setSearchQuery(e.target.value)} />
        <label htmlFor="type-filter">Filter by type:</label>
        <select id="type-filter" value={typeFilter} onChange={e => setTypeFilter(e.target.value)}>
          <option value="">All</option>
          <option value="bug">Bug</option>
          <option value="dark">Dark</option>
          <option value="dragon">Dragon</option>
          <option value="electric">Electric</option>
          <option value="fairy">Fairy</option>
          <option value="fighting">Fighting</option>
          <option value="fire">Fire</option>
          <option value="flying">Flying</option>
          <option value="ghost">Ghost</option>
          <option value="grass">Grass</option>
          <option value="ground">Ground</option>
          <option value="ice">Ice</option>
          <option value="normal">Normal</option>
          <option value="poison">Poison</option>
          <option value="psychic">Psychic</option>
          <option value="rock">Rock</option>
          <option value="shadow">Shadow</option>
          <option value="steel">Steel</option>
          <option value="water">Water</option>
        </select>
        <label htmlFor="sort-by">Sort by:</label>
        <select id="sort-by" value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="id">ID</option>
          <option value="name">Name</option>
        </select>
        <label htmlFor="sort-order">Sort order:</label>
        <select id="sort-order" value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <InfiniteScroll
          style={{ overflowX: "hidden" }}
          dataLength={pokemon.length}
          next={loadMore}
          hasMore={limit<950}
          loader={
            <h1 className="mx-auto text-center text-white">Loading...</h1>
          }
        >
          <div className="row">
          {filteredPokemon
            .sort((a, b) => {
              if (sortBy === 'id') {
                return sortOrder === 'asc' ? a.id - b.id : b.id - a.id;
              } else {
                return sortOrder === 'asc' 
                  ? a.name.localeCompare(b.name) 
                  : b.name.localeCompare(a.name);
              }
            })
            .map(p => (
              <div className="col-3">
                <div key={p.id}>
                  <PokemonCard component={'span'} pokemonName={p.name} />
                </div>
              </div>
            ))}
        </div>
        </InfiniteScroll>
        
      </Container>
    </div>
  );
}

export default PokemonCards;