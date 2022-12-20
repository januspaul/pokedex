import { Link } from 'react-router-dom';
import './style.css';

function Footer() {
    return (
        <div>
            <div className="row bg-row">
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-4 img-style">
                            <img src="logoPokemon.png" alt="logo" className="img-fluid" />
                            <a href='https://caru.bbbprograms.org/seal/confirmation/1596150491'><img src="privacy.png" alt="logo" className="img-fluid" /></a>
                        </div>
                        <div className="col-md-4 mt-4 mb-4">
                            <div className='mb-3'>
                                <span className="line"></span>
                                <Link to="/" className='text-style'>Home</Link>
                            </div>
                            <div className='mt-2 mb-3'>
                                <span className="line"></span>
                                <Link to="/Pokedex" className='text-style'>Pokedex</Link>
                            </div>
                            <div className='mt-2 mb-3'>
                                <span className="line"></span>
                                <Link to="/News" className='text-style'>News</Link>
                            </div>
                            <div className='mt-2 mb-3'>
                                <span className="line"></span>
                                <Link to="/About" className='text-style'>About</Link>
                            </div>
                            <div>
                                <span className="line"></span>
                                <Link to="/Contact" className='text-style'>Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mt-5 mb-4">
                    <p className='ms-2 fw-bold'>Follow us on Social Media:</p>
                    <div className='ms-5'>
                        <span><img className='img-fluid ms-2 border border-4 rounded-circle' width={50} src="facebook.png" alt="social media icons" /></span>
                        <span><img className='img-fluid ms-2 border border-4 rounded-circle' width={50} src="youtube.png" alt="social media icons" /></span>
                        <span><img className='img-fluid ms-2 border border-4 rounded-circle' width={50} src="instagram.png" alt="social media icons" /></span>
                        <span><img className='img-fluid ms-2 border border-4 rounded-circle' width={50} src="pinterest.png" alt="social media icons" /></span>
                        <span><img className='img-fluid ms-2 border border-4 rounded-circle' width={50} src="twitter.png" alt="social media icons" /></span>
                    </div>
                </div>
            </div>
            <div className='bg-footer text-center text-muted font-monospace'>
                <p>© 2022 Pokémon. © 1995 - 2022 Nintendo/Creatures Inc./GAMEFREAK Inc. TM, © Nintendo.</p>
            </div>
        </div>
    )
}

export default Footer;