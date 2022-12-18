import { Link } from 'react-router-dom';
import './style.css';

function Footer() {
    return (
        <div className="mt-5">
            <div className="row" style={{ backgroundColor: "#B52323", color: "white" }}>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-4 me-5 mt-3 mb-5 img-style">
                            <img src="logoPokemon.png" alt="logo" className="img-fluid" />
                            <a href='https://caru.bbbprograms.org/seal/confirmation/1596150491'><img src="privacy.png" alt="logo" className="img-fluid" /></a>
                        </div>
                        <div className="col-4 mt-4 ms-5 ps-4">
                            <div className='mb-2'>
                                <div className="vr"></div>
                                <Link to="/" className='text-style'>Home</Link>
                            </div>
                            <div className='mt-2 mb-2'>
                                <div className="vr"></div>
                                <Link to="/Pokedex" className='text-style'>Pokedex</Link>
                            </div>
                            <div className='mt-2 mb-2'>
                                <div className="vr"></div>
                                <Link to="/News" className='text-style'>News</Link>
                            </div>
                            <div className='mt-2 mb-2'>
                                <div className="vr"></div>
                                <Link to="/About" className='text-style'>About</Link>
                            </div>
                            <div>
                                <div class="vr"></div>
                                <Link to="/Contact" className='text-style'>Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mt-4">
                    <p>Follow us on Social Media:</p>

                </div>
            </div>
            <div className='bg text-center text-muted' style={{ backgroundColor: "#6423B5" }}>
                <p>© 2022 Pokémon. © 1995 - 2022 Nintendo/Creatures Inc./GAMEFREAK Inc. TM, © Nintendo.</p>
            </div>
        </div>
    )
}

export default Footer;