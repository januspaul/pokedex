import React from 'react';

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
    <div>
      {pokemons.map((pokemon) => (
        <div key={pokemon.id}>
          <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
          <h1>{pokemon.name}</h1>
          <p>{pokemon.types[0].type.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Featured;
