import React, { Component } from 'react';

class PokemonList extends Component {
  state = {
    pokemon: []
  };

  componentDidMount() {
    this.fetchPokemon(this.props.type);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.type !== this.props.type) {
      this.fetchPokemon(this.props.type);
    }
  }

  fetchPokemon(type) {
    fetch(`https://pokeapi.co/api/v2/type/${type}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ pokemon: data.pokemon });
      });
  }

  render() {
    return (
      <ul>
        {this.state.pokemon.map(p => (
          <li key={p.pokemon.name}>{p.pokemon.name}</li>
        ))}
      </ul>
    );
  }
}

export default PokemonList;
