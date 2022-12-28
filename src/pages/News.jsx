import { Button } from "@mui/material";

const News = () => {
    const today = new Date();
    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    };
    const formatter = new Intl.DateTimeFormat('en-US', options);

    return (
        <div className="bg-primary">
            <div className="row newsHeader-bg mb-3 text-white">
                <div className="col-lg-6 mt-3 mb-5">
                    <span className="ms-5 badge text-bg-warning">Media</span>
                    <span className="ms-3">{formatter.format(today)}</span>
                    <h2 className="ms-5 mt-2 fw-bold">It’s Time for a Gift Exchange on Pokémon TV</h2>
                    <p className="ms-5 mt-4">Get into the holiday spirit as you watch Ash and friends share presents in a special collection of Pokémon the Series episodes.</p>
                    <Button className="ms-5 pe-3 bg-primary rounded-pill text-white ps-3">
                    <img className='hero1Pokeball' src="pokeball.png" alt="" />
                        Read More
                    </Button>
                </div>
                <div className="col-lg-6">
                    <img className="img-fluid d-block w-100 pokeHoliday-border" src="https://www.pokemon.com/static-assets/content-assets/cms2/img/watch-pokemon-tv/_tiles/stunts/winter/2022/winter-169-en.png" alt="pokemon holiday" />
                </div>
            </div>
            <div className="d-flex justify-content-center text-white">
                <p className="bg-primary ps-5 pe-5 pb-2 pt-2 fw-bold radius-bottom" style={{ position: "absolute", }}>LATEST NEWS</p>
            </div>
            <img className="img-fluid d-block w-100" src="BGnews 1.png" alt="" />
        </div>
    )
}

export default News;