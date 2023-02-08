import axios from 'axios'
import { useState, useEffect } from 'react';
import Cards from '../components/Cards';
import { Link } from 'react-router-dom';

/*TEsting elements*/
import gamesJSON_1 from '../components/TestingJSON/games1.json'
import gamesJSON_2 from '../components/TestingJSON/games2.json'
import gamesJSON_3 from '../components/TestingJSON/games3.json'


const SearchGames = () => {
    const API_KEY = "c4191c510ad54fb8a7ee5b559e1b712e";
    const url = "https://api.rawg.io/api/games?"

    const [games, setGames] = useState([]);

    useEffect(() => {
        getGames();
    }, []);

    const getGames = async () => {
        //const res = await axios.get(`${url}key=${API_KEY}`);        
        //setGames(res.data.results);
        setGames(gamesJSON_1.results);

    }


    return (
        <section className='main_card'>
            {
                games.map((game) => {
                    return (
                        <Link to={`/games/${game.slug}`} key={game.id}>
                            <Cards  game={game} />
                        </Link>
                    )
                })
            }
        </section>
    );

}

export default SearchGames;