import { Link } from 'react-router-dom';
import './style.css';

function Footer() {
    return (
        <div>
            <div className="row bg-row">
                <div className="col-6">
                    <div className="row ms-5 me-5 mt-4 mb-5">
                        <div className="col-md-6 img-style">
                            <img src="logoPokemon.png" alt="logo" className="img-fluid" />
                            <a href='https://caru.bbbprograms.org/seal/confirmation/1596150491'><img src="privacy.png" alt="logo" className="img-fluid" /></a>
                        </div>
                        <div className="col-md-6">
                            <div className='ms-5'>
                                <span className="line"></span>
                                <Link to="/" className='text-style'>Home</Link>
                            </div>
                            <div className='ms-5'>
                                <span className="line"></span>
                                <Link to="/Pokedex" className='text-style'>Pokedex</Link>
                            </div>
                            <div className='ms-5'>
                                <span className="line"></span>
                                <Link to="/News" className='text-style'>News</Link>
                            </div>
                            <div className='ms-5'>
                                <span className="line"></span>
                                <Link to="/About" className='text-style'>About</Link>
                            </div>
                            <div className='ms-5'>
                                <span className="line"></span>
                                <Link to="/Contact" className='text-style'>Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 mt-5 mb-4 pt-3">
                    <p className='ms-5 fw-bold'>Follow us on Social Media:</p>
                    <div className='m-5 ps-5'>
                        <span><img className='img-fluid ms-2 mt-3 border border-4 rounded-circle' width={50} src="facebook.png" alt="social media icons" /></span>
                        <span><img className='img-fluid ms-2 mt-3 border border-4 rounded-circle' width={50} src="youtube.png" alt="social media icons" /></span>
                        <span><img className='img-fluid ms-2 mt-3 border border-4 rounded-circle' width={50} src="instagram.png" alt="social media icons" /></span>
                        <span><img className='img-fluid ms-2 mt-3 border border-4 rounded-circle' width={50} src="pinterest.png" alt="social media icons" /></span>
                        <span><img className='img-fluid ms-2 mt-3 border border-4 rounded-circle' width={50} src="twitter.png" alt="social media icons" /></span>
                    </div>
                </div>
            </div>
            <div className='container-fluid bg-footer text-center text-muted font-monospace'>
                <p>© 2022 Pokémon. © 1995 - 2022 Nintendo/Creatures Inc./GAMEFREAK Inc. TM, © Nintendo.</p>
            </div>
        </div>
    )
}

export default Footer;