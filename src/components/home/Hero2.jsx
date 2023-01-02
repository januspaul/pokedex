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
        <div className="vw-100" style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + '/hero2.png'})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            backgroundPositionX: 'center'
          }}>
            {pokemons.length > 0 && (
                <div className="row text-white d-flex align-items-center justify-content-center p-2">
                    <div className="col-md-6 bg-light shadow rounded-circle hero2img text-center">
                        <img className='img-fluid d-block w-100' src={pokemons[0].sprites.other['official-artwork'].front_default} alt={pokemons[0].name} />
                    </div>
                    <div className="col-md-6 align-middle">
                        <h1 className='text-center fst-italic text-uppercase fw-bolder mt-5'>{pokemons[0].name}</h1>
                        <div className='display-6'>
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
                                        <td className='text-capitalize'><ul>{pokemons[0].types.map((type) => (
                                            <li ke={type.type.name}>{type.type.name}</li>
                                        ))}
                                        </ul></td>
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