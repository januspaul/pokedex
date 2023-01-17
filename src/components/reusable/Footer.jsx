import { Link } from 'react-router-dom';


function Footer() {
    return (
        <div>
            <div className='bg-danger py-5'>
                <div className="row p-3">
                    <div className="col-lg-4">
                        <div className='align-items-center justify-content-center d-flex'>
                        <a href="/" target="_blank" rel="noreferrer"><img src="logoPokemon.png" alt="logo" className='footerLogo1' /></a>
                        </div>
                        <div className='align-items-center justify-content-center d-flex'>
                        <a href="https://caru.bbbprograms.org/seal/Confirmation/1596150491" target="_blank" rel="noreferrer"><img src="privacy.png" alt="logo" className='footerLogo2' /></a>
                        </div>
                    </div>
                    <div className="col-md-4 mt-4">
                        <div className="row">
                            <div className="col-6">
                                <p className='aboutUsHeader text-white fw-bold'>Menu</p>
                                <ul className='navbar-nav hero1SearchButton'>
                                    <li className="list-group-item pb-2"><Link to="/" className="footerText"><span className="footerLine"></span>Home</Link></li>
                                    <li className="list-group-item pb-2"><Link to="/Pokedex" className="footerText"><span className="footerLine"></span>Pokedex</Link></li>
                                    <li className="list-group-item pb-2"><Link to="/News" className="footerText"><span className="footerLine"></span>News</Link></li>
                                    <li className="list-group-item pb-2"><Link to="/About" className="footerText"><span className="footerLine"></span>About</Link></li>
                                    <li className="list-group-item pb-2"><Link to="/Contact" className="footerText"><span className="footerLine"></span>Contact</Link></li>
                                </ul>
                            </div>

                            <div className="col-6 justify-content-center d-flex">
                                <div>
                                    <p className='text-white fw-bold'>Our Partners</p>
                                    <ul className='navbar-nav'>
                                        <li className="list-group-item"><a href="https://www.nintendo.com/" target="_blank" rel="noreferrer"><img src="/nintendo.png" alt="" className='footerPartners' /></a></li>
                                        <li className="list-group-item" ><a href="https://www.gamefreak.co.jp/" target="_blank" rel="noreferrer"><img src="/gamefreak.png" alt="" className='footerPartners' /></a></li>
                                        <li className="list-group-item"><a href="https://www.creatures.co.jp/" target="_blank" rel="noreferrer"><img src="/creatures.png" alt="" className='footerPartners' /></a></li>
                                        <li className="list-group-item"><a href="https://nianticlabs.com/" target="_blank" rel="noreferrer"><img src="/niantic.png" alt="" className='footerPartners' /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 justify-content-center d-flex mt-4">
                        <div>
                            <p className='aboutUsHeader text-white fw-bold'>Follow us on Social Media</p>
                            <div>
                                <a href="https://www.facebook.com/profile.php?id=100089807640521" target="_blank" rel="noreferrer"><span><img className='img-fluid ms-2 mt-3 border border-4 rounded-circle' width={50} src="facebook.png" alt="social media icons" /></span></a>
                                <a href="https://www.youtube.com/channel/UCK-g2Qn524biJnCqNTuVYaw" target="_blank" rel="noreferrer"><span><img className='img-fluid ms-2 mt-3 border border-4 rounded-circle' width={50} src="youtube.png" alt="social media icons" /></span></a>
                                <a href="https://www.instagram.com/pokemonproject69/" target="_blank" rel="noreferrer"><span><img className='img-fluid ms-2 mt-3 border border-4 rounded-circle' width={50} src="instagram.png" alt="social media icons" /></span></a>
                                <a href="https://www.pinterest.ph/pokemonproject/" target="_blank" rel="noreferrer"><span><img className='img-fluid ms-2 mt-3 border border-4 rounded-circle' width={50} src="pinterest.png" alt="social media icons" /></span></a>
                                <a href="https://twitter.com/pokemonproject5" target="_blank" rel="noreferrer"><span><img className='img-fluid ms-2 mt-3 border border-4 rounded-circle' width={50} src="twitter.png" alt="social media icons" /></span></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='footerCr text-center text-muted'>
                <p>© 2022 Pokémon. © 1995 - 2022 Nintendo/Creatures Inc./GAMEFREAK Inc. TM, © Nintendo.</p>
            </div>
        </div>
    )
}

export default Footer;