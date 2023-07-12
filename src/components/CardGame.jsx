import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaPlaystation, FaXbox, FaWindows } from "react-icons/fa";
import { SiNintendo } from 'react-icons/si';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";

import './CardGame.css'

//********************************************* */

const CardGame = () => {
    const API_KEY = "c4191c510ad54fb8a7ee5b559e1b712e";
    const url = "https://api.rawg.io/api/games/"
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dic"];
   
    /******************* */

    const [gameData, setGameData] = useState({});
    const [gameScreenshot, setScreenshot] = useState([]);
    const { slug } = useParams();

    useEffect(() => {
        const getGameData = async () => {
            const res = await axios.get(`${url}${slug}?key=${API_KEY}`);
            setGameData(res.data);
        }

        getGameData();        
    }, []);

    useEffect(()=>{
        const getGameScreenshot = async () => {
            const res = await axios.get(`${url}${slug}/screenshots?key=${API_KEY}`);
            setScreenshot(res.data.results)           
        }

        getGameScreenshot()
    },[])


    const colorsPlatforms = ["", "#000000", "#000000", "#000000", "", "", "", "#000000"];

    const date_released = new Date(gameData.released);

    return (
        <div className="cardGame"
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(100, 100, 100, 0.5) 60%, rgba(50, 50, 50, 0.95 ) 80%, rgba(0, 0, 0, 0.99) 90%), url(${gameData.background_image})`,
                backgroundRepeat: "repeat-y",
                backgroundSize: "100% auto",
                textAlign: "start",
                paddingLeft: "0rem",
            }}>
            <div className="gameData" >
                <div className="info_wrapper">
                    <div className="released">Released on:
                        {` ${month[date_released.getMonth()]}`} {date_released.getDate()}, {date_released.getFullYear()}
                    </div>

                    {(() => {                                            
                        if (gameData.parent_platforms) {
                            const parent_platforms = gameData.parent_platforms.map(element => element.platform.id);
                            return (
                                <div className="card_platforms"> Platforms:
                                    <FaPlaystation color={colorsPlatforms[2]} display={parent_platforms.includes(2) ? "inline-block" : "none"} />
                                    <FaWindows color={colorsPlatforms[1]} display={parent_platforms.includes(1) ? "inline-block" : "none"} />
                                    <FaXbox color={colorsPlatforms[3]} display={parent_platforms.includes(3) ? "inline-block" : "none"} />
                                    <SiNintendo color={colorsPlatforms[7]} display={parent_platforms.includes(7) ? "inline-block" : "none"} />
                                </div>
                            )
                        }
                    })()}
                    <div className="avg_playtime">Average playtime: {gameData.playtime} hours</div>

                </div>

                <h2 className="h2_title">{gameData.name}</h2>

                <section className="aboutGame">
                    <h3>About</h3>                    
                    <div className="aboutGameText">
                        {(() => {
                            if (gameData.description_raw) {
                                const textAboutArray = gameData.description_raw.split("\n");
                             
                                return (
                                    textAboutArray.map((paragraph, index) => {
                                        return (
                                            <p key={index}>{paragraph}</p>
                                        )
                                    })
                                )
                            }
                        })()
                        }
                    </div>

                    <div className="gameScreenShots">
                        <div id="carouselExample" className="carousel slide">
                            <div className="carousel-inner" id="carousel-inner-id">
                                {gameScreenshot.map((screenshot, index) => {
                                    return (
                                        <div key={index} className={`carousel-item ${index ? '' : 'active'}`} > {/* //{`carousel-item ${index===0? 'active' : ''}`}> */}
                                            <img src={screenshot.image} className="d-block w-100" alt="..." />
                                        </div>
                                    )
                                })}

                            </div>
                            <button className="carousel-control-prev" id="carrousel-arrow" color="black" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" id="carrousel-arrow" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </section>

                {(() => {
                    if (gameData.platforms !== undefined) {
                        return (
                            <section className="extraInfo">
                                <div><span>Platforms: </span>{gameData.platforms.map((element, index) => {
                                    return (
                                        `${element.platform.name}${index === gameData.platforms.length - 1 ? '' : ', '}`
                                    )
                                })}
                                </div>

                                <div><span>ESRB Rating: </span> {gameData.esrb_rating ? gameData.esrb_rating.name : 'Not rated'}
                                </div>


                                <div><span>Genres: </span> {gameData.genres.map((genre, index) => {
                                    return (
                                        `${genre.name}${index === gameData.genres.length - 1 ? '' : ', '}`
                                    )
                                })}
                                </div>
                                <div><span>Developers: </span>{gameData.developers.map((element, index) => {
                                    return (
                                        `${element.name}${index === gameData.developers.length - 1 ? '' : ', '}`
                                    )
                                })}
                                </div>
                            </section>
                        )
                    }
                })()}

            </div>
        </div>
    );
}

export default CardGame;