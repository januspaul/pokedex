import React from 'react';

const Hero2 = () => {
    const [pokemons, setPokemons] = React.useState([]);

    React.useEffect(() => {
        const randomId = Math.floor(Math.random() * 950) + 1;
        fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
            .then((response) => response.json())
            .then((data) => setPokemons((prevPokemons) => [...prevPokemons, data]));
    }, []);

    return (

        <div className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {pokemons.length > 0 && (
                            <div className="row text-white d-flex align-items-center justify-content-center p-2">
                                <div className="col-md-6 bg-primary rounded-circle hero2img text-center" data-aos="zoom-in" data-aos-duration="1000">
                                    <img className='img-fluid d-block w-100' src={pokemons[0].sprites.other['official-artwork'].front_default} alt={pokemons[0].name} />
                                </div>
                                <div className="col-md-6 align-middle">
                                    <h1 className='text-center text-warning fst-italic text-uppercase fw-bolder mt-5' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">{pokemons[0].name}</h1>
                                    <div className='display-6'>
                                        <table className='table table-borderless text-white'>
                                            <tbody>
                                                <tr data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1100">
                                                    <th scope="row"></th>
                                                    <td className='text-warning fs-2' >Height: </td>
                                                    <td className='fs-2'>{pokemons[0].height} m</td>
                                                </tr>
                                                <tr data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1200">
                                                    <th scope="row"></th>
                                                    <td className='text-warning fs-2'>Weight: </td>
                                                    <td className='fs-2'>{pokemons[0].weight} kg</td>
                                                </tr>
                                                <tr data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1300">
                                                    <th scope="row"></th>
                                                    <td className='text-warning fs-2'>Type: </td>
                                                    <td className='text-capitalize fs-2'>{pokemons[0].types.map((type, index) => (
                                                        <React.Fragment key={index}>
                                                            {type.type.name}
                                                            {index !== pokemons[0].types.length - 1 && <br />}
                                                        </React.Fragment>
                                                    ))}
                                                    </td>
                                                </tr>
                                                <tr data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1400">
                                                    <th scope="row"></th>
                                                    <td className='text-warning fs-2'>Abilities: </td>
                                                    <td className='text-capitalize fs-2'>{pokemons[0].abilities.map((ability, index) => (
                                                        <React.Fragment key={index}>
                                                            {ability.ability.name}
                                                            {index !== pokemons[0].abilities.length - 1 && <br />}
                                                        </React.Fragment>
                                                    ))}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero2;