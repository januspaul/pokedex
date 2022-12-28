const About = () => {
    return (
        <div className="contactContainer vw-100 vh-100">
            <div className="container">
                <div className="row contactCol1 d-flex align-items-center justify-content-center">
                    <div className="col-6 text-white">
                        <h1 className="aboutUsHeader pb-3 text-warning">About us</h1>
                        <p className="aboutUsDetails">The Pokémon Company International manages the property outside of Asia 
                            and is responsible for brand management, licensing, marketing, the Pokémon Trading Card Game, 
                            the animated TV series, home entertainment, and the official Pokémon website.</p>

                    </div>
                    <div className="col-6">
                        <img className='contactCol2' src="abouthero1.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;