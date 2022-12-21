import React from 'react';

const Hero2 = () => {
    const [pokemons, setPokemons] = React.useState([]);

    React.useEffect(() => {
        const randomId = Math.floor(Math.random() * 807) + 1;
        fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
            .then((response) => response.json())
            .then((data) => setPokemons((prevPokemons) => [...prevPokemons, data]));
    }, []);

    return (
        <div className='bg-hero2'>
            {pokemons.length > 0 && (
                <div className="row text-white">
                    <div className="col-lg-6 bg-light bg-opacity-75 rounded-circle img mt-5 mb-5">
                        <img className='img-fluid d-block w-90' src={pokemons[0].sprites.other['official-artwork'].front_default} alt={pokemons[0].name} />
                    </div>
                    <div className="col-lg-6 align-middle">
                        <h1 className='text-center fst-italic text-uppercase fw-bolder mt-5 mb-4'>{pokemons[0].name}</h1>
                        <div className='display-6 ms-5'>
                            <table className='table table-borderless text-white'>
                                <tbody>
                                    <tr>
                                        <th scope="row"></th>
                                        <td>Height: </td>
                                        <td>{pokemons[0].height} m</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"></th>
                                        <td>Weight: </td>
                                        <td>{pokemons[0].weight} kg</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"></th>
                                        <td>Type: </td>
                                        <td className='text-capitalize'>{pokemons[0].types[0].type.name}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"></th>
                                        <td>Abilities: </td>
                                        <td className='text-capitalize'><ul>{pokemons[0].abilities.map((ability) => (
                                            <li key={ability.ability.name}>{ability.ability.name}</li>
                                        ))}</ul></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Hero2;