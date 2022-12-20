import React from 'react';

const Featured=()=>{
    const [pokemon,setPokemon] = React.useState(null);
    

    React.useEffect(()=> {
        const randomId = Math.floor(Math.random() * 807) + 1;
        fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
        .then((response)=> response.json())
        .then((data) => setPokemon(data));
    },[]);

    return(
        <div>
            {
                pokemon && (
                    <div>
                        
                        <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name}/>
                        <h1>{pokemon.name}</h1>
                        <p>{pokemon.types[0].type.name}</p>
                    </div>
                )
            }
        </div>
    )
}

export default Featured;