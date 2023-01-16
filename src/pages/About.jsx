const About = () => {
    return (

        <div className="BG">
            <div className="container">
                <div className="row aboutCol d-flex align-items-center justify-content-center">
                    <div className="col-6 text-white">
                        <h1 className="aboutUsHeader pb-3 text-warning">About us</h1>
                        <p className="aboutUsDetails">The Pokémon Company International manages the property outside of Asia
                            and is responsible for brand management, licensing, marketing, the Pokémon Trading Card Game,
                            the animated TV series, home entertainment, and the official Pokémon website.</p>
                    </div>
                    <div className="col-6">
                        <img src="abouthero1.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="aboutHeadings d-flex align-items-center justify-content-center">
                <h1 className="aboutUsHeader text-warning">Our Core Values</h1>
            </div>

            <div className="container d-flex align-items-center justify-content-center pb-4">
                <div className="row">
                    <div className="col-4">
                        <div className="aboutCard1">
                            <div>
                                <h2 className="aboutCardTitle px-3 py-2">Passion for Pokémon</h2>
                                <p className="aboutCardText fs-5 px-3 py-2">We have a passion for Pokémon that drives us to understand the impact our brand has on teammates, fans, players, and communities.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="aboutCard2">
                            <div>
                                <h2 className="aboutCardTitle px-3 py-2">Dedicated to Quality</h2>
                                <p className="aboutCardText fs-5 px-3 py-2">We take ownership of maintaining and promoting high standards, continuously seeking ways to learn and improve while encouraging and trusting others to do the same.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="aboutCard3">
                            <div>
                                <h2 className="aboutCardTitle px-3 py-2">Challenging the Expected</h2>
                                <p className="aboutCardText fs-5 px-3 py-2">We display curiosity and creativity and use these qualities to develop innovative ideas, solve complex problems, and identify unique opportunities.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="container d-flex align-items-center justify-content-center">
                <div className="row">
                    <div className="col-4">
                        <div className="aboutCard4">
                            <div>
                                <h2 className="aboutCardTitle px-3 py-2">Building Relationships</h2>
                                <p className="aboutCardText fs-5 px-3 py-2">We think “team first,” developing and strengthening collaborative partnerships with all teammates—internal and external—to get things done quicker, smarter, and better.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="aboutCard5">
                            <div>
                                <h2 className="aboutCardTitle px-3 py-2">Integrity and Respect</h2>
                                <p className="aboutCardText fs-5 px-3 py-2">We treat people with respect and empathy to build an open and trusting environment.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="aboutCard6">
                            <div>
                                <h2 className="aboutCardTitle px-3 py-2">Delighting Customers</h2>
                                <p className="aboutCardText fs-5 px-3 py-2">We listen to our customers and stakeholders and do everything we can to deliver a unique Pokémon experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="aboutHeadings d-flex align-items-center justify-content-center">
                <h1 className="aboutUsHeader text-warning">Our Partners</h1>
            </div>

            <div className="container d-flex align-items-center justify-content-center pb-5">
                <div className="row">
                    <div className="col-3">
                        <a href="https://www.nintendo.com/" target="_blank" rel="noreferrer">
                            <div className="bgCardHoverAbout">
                                <div className="aboutPartnersCol bg-warning d-flex align-items-center justify-content-center">
                                    <div className="aboutNintendo mx-auto">
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-3">
                        <a href="https://www.gamefreak.co.jp/" target="_blank" rel="noreferrer">
                            <div className="bgCardHoverAbout">
                                <div className="aboutPartnersCol bg-warning d-flex align-items-center justify-content-center">
                                    <div className="aboutGamefreak mx-auto">
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-3">
                        <a href="https://www.creatures.co.jp/" target="_blank" rel="noreferrer">
                            <div className="bgCardHoverAbout">
                                <div className="aboutPartnersCol bg-warning d-flex align-items-center justify-content-center">
                                    <div className="aboutCreatures mx-auto">

                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-3">
                        <a href="https://nianticlabs.com/" target="_blank" rel="noreferrer">
                            <div className="bgCardHoverAbout">
                                <div className="aboutPartnersCol bg-warning d-flex align-items-center justify-content-center">
                                    <div className="aboutNiantic mx-auto">
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default About;