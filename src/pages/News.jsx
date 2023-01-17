import { Button } from "@mui/material";
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const News = () => {

    const [articles, setArticles] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const itemsPerPage = 5;

    useEffect(() => {


        const fetchArticles = async () => {
    try {
        const res = await axios.get(
            `https://newsapi.org/v2/everything?q=pokemon&from=2023-01-01&to=2023-01-31&sortBy=publishedAt&language=en&apiKey=c8c98833a9574e528d5e7b56486ee3ae`
        );
        setArticles(res.data.articles);
        setTotalPages(res.data.totalResults / itemsPerPage);
    } catch (error) {
        console.error(error);
    }
};

        fetchArticles();
    }, []);

    const currentItems = articles.slice(0, pageNumber * itemsPerPage);

    const today = new Date();
    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const handleLoadMoreClick = () => {
        setPageNumber(pageNumber + 1);
    };

    return (
        <div className="BG">
            <div className="row align-items-center aboutCol px-5 mx-5 mb-5">

                <div className="col-6" data-aos="fade-up" data-aos-duration="2000">
                    <span className="badge text-bg-danger">{formatter.format(today)}</span>
                    <h1 className="text-warning aboutUsHeader">HONEST GAME TRAILERS DOES POKEMON VIOLET AND SCARLET</h1>
                    <p className="text-white hero1SearchButton">There is now a pretty long tradition of Honest Game Trailers doing videos
                        about the latest Pokemon title, with a review of the game and then a listing
                        out of all of the Pokemon available in the title with alternate names.  So here we are again. This video is …</p>
                    <Button variant="contained" color="primary" href="https://tagn.wordpress.com/2023/01/15/honest-game-trailers-does-pokemon-violet-and-scarlet/" target="_blank" className="readMoreButton">Read More</Button>
                </div>
                <div className="col-6" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                    <img className="img-fluid d-block w-100 imageStyle" src="https://tagn.files.wordpress.com/2022/03/pokemonscarletandviolet.jpg" alt="" />
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <hr className="text-white" />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-white text-center pt-5 aboutUsHeader "> Latest News </h2>
                    </div>
                </div>
            </div>

            <div className="container p-5 d-flex justify-content-center align-items-center">
                <div className="row">
                    {currentItems.map((article) => (
                        <div key={article.url} className="text-white">
                            <div className="row align-items-center p-3">
                                <div className="col-6" data-aos="fade-up">
                                    <img src={article.urlToImage} alt={article.title} className="img-fluid imageStyle d-block w-100" />
                                </div>
                                <div className="col-6" data-aos="fade-up">
                                    <span className="badge text-bg-danger">{formatter.format(new Date(article.publishedAt))}</span>
                                    <h3 className="text-warning aboutUsHeader">{article.title}</h3>
                                    <p className="text-white hero1SearchButton">{article.description}</p>
                                    {article.url && <Button variant="contained" color="primary" href={article.url} target="_blank" className="readMoreButton">Read More</Button>}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <Button style={{ width: "200px" }}
                    className="bg-primary rounded-pill text-white mt-5 mb-4"
                    onClick={handleLoadMoreClick}
                    disabled={pageNumber >= totalPages}
                >
                    Load More
                </Button>
            </div>
        </div>
    );
}

export default News;