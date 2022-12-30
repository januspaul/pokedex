import axios from 'axios';
import { useState, useEffect } from 'react';

async function getPokemonFlavorText(textPokemon) {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${textPokemon}`);
    const pokemon = response.data;
    const flavorTextEntries = pokemon.flavor_text_entries;
    // Find the flavor text in English
    const flavorText = flavorTextEntries.find(entry => entry.language.name === 'en').flavor_text;
    return flavorText;
  } catch (error) {
    console.error(error);
  }
}

function PokemonFlavorText(props) {
  const [flavorText, setFlavorText] = useState('');

  useEffect(() => {
    async function fetchFlavorText() {
      const text = await getPokemonFlavorText(props.textPokemon);
      setFlavorText(text);
    }
    fetchFlavorText();
  }, [props.textPokemon]);

  return (
    <div>
      <p>{flavorText}</p>
    </div>
  );
}

export default PokemonFlavorText;





