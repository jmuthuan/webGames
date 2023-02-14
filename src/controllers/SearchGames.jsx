import axios from 'axios'
import { useState, useEffect } from 'react';
import Cards from '../components/Cards';
import { Link } from 'react-router-dom';

/*TEsting elements*/
import gamesJSON_1 from '../components/TestingJSON/games1.json'
import gamesJSON_2 from '../components/TestingJSON/games2.json'
import gamesJSON_3 from '../components/TestingJSON/games3.json'

//Testin elements
const API_KEY_CIBER = 'c21a2e0bd365470f86ef5fb3a5ce67b0';


const SearchGames = (props) => {
    const API_KEY = "c4191c510ad54fb8a7ee5b559e1b712e";
    const url = "https://api.rawg.io/api/games?"

    let urlAxios = `${url}key=${API_KEY_CIBER}`;

    //console.log("url Axios: "+ urlAxios);
    
    const [games, setGames] = useState({});

    useEffect(() => {  
        const getGames = async () => {
            const res = await axios.get(urlAxios);        
            setGames(res.data);
            //setGames(gamesJSON_1.results);                   
        }
        
        getGames();
    }, [games.count, games.next, props.url]); 
    
   

    if(props.url){
        urlAxios=`${url}${props.url}&key=${API_KEY_CIBER}`;
        //getGames();
    }

//    console.log("Games: ");
    if(games.results !== undefined){
        console.log(games.results);
        return (
            <section className='main_card'>               
                {           
                    games.results.map((game) => {
                        return (
                            <Link to={`/games/${game.slug}`} key={game.id}>
                                <Cards  game={game} key={game.id} />
                            </Link>
                        )
                    }) 
                }
            </section>
        );

    }

}

export default SearchGames;