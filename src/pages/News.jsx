import { Button } from "@mui/material";
import Badge from 'react-bootstrap/Badge';
import Pokenews from '../components/reusable/news.json';


const News = () => {


    const today = new Date();
    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    };
    const formatter = new Intl.DateTimeFormat('en-US', options);


    return (
        <div className="BG">
            <div className="row align-items-center aboutCol px-5 mx-5 mb-5">

                <div className="col-sm-6 col-md-12 col-lg-6" data-aos="fade-up" data-aos-duration="2000">
                    <span className="badge text-bg-danger">{formatter.format(today)}</span>
                    <h1 className="text-warning aboutUsHeader">HONEST GAME TRAILERS DOES POKEMON VIOLET AND SCARLET</h1>
                    <p className="text-white hero1SearchButton">There is now a pretty long tradition of Honest Game Trailers doing videos
                        about the latest Pokemon title, with a review of the game and then a listing
                        out of all of the Pokemon available in the title with alternate names.  So here we are again. This video is …</p>
                    <Button variant="contained" color="primary" href="https://tagn.wordpress.com/2023/01/15/honest-game-trailers-does-pokemon-violet-and-scarlet/" target="_blank" className="readMoreButton">Read More</Button>
                </div>
                <div className="col-sm-6 col-md-12 col-lg-6" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                    <a href="https://tagn.wordpress.com/2023/01/15/honest-game-trailers-does-pokemon-violet-and-scarlet/" target="_blank" rel="noreferrer">
                    <img className="img-fluid d-block w-100 imageStyle mt-5" src="https://tagn.files.wordpress.com/2022/03/pokemonscarletandviolet.jpg" alt="" />
                    </a>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <hr className="text-white" />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="text-warning text-center pt-5 aboutUsHeader "> Latest News </h2>
                    </div>
                </div>
            </div>

            <div className="container p-5 d-flex justify-content-center align-items-center">
                <div className="row">
                    {Pokenews.map(pokemonnews => {
                        return (
                            <div className="row pb-5 " data-aos="fade-up">
                                <div className="col-sm-6 col-md-12 col-lg-6">
                                    <a href={pokemonnews.redirectURL} target="_blank" rel="noreferrer">
                                    <img src={pokemonnews.url} alt={pokemonnews.title} className="img-fluid rounded-5 border border-5"/>
                                    </a>
                                </div>
                                <div className="col-sm-6 col-md-12 col-lg-6 mt-3">
                                    <div className="pb-3">
                                    <Badge className="bg-danger px-2 aboutUsHeader">{pokemonnews.type}</Badge> <span className="text-warning ps-2 aboutUsHeader">{pokemonnews.date}</span>
                                    </div>
                                    <h2 className="pb-3 aboutUsHeader text-warning">{pokemonnews.title}</h2>
                                    <p className="hero1SearchButton text-white">{pokemonnews.description}</p>
                                    <Button variant="contained" color="primary" href={pokemonnews.redirectURL} target="_blank" className="readMoreButton">Read More</Button>
                                </div>
                            </div>
                        )
                    })

                    }
                </div>
            </div>

        </div>
    );
}

export default News;