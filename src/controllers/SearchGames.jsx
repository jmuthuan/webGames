import axios from 'axios'
import { useState, useEffect } from 'react';
import Cards from '../components/Cards';
import { Link } from 'react-router-dom';

/*TEsting elements*/
import gamesJSON_1 from '../components/TestingJSON/games1.json'
import gamesJSON_2 from '../components/TestingJSON/games2.json'
import gamesJSON_3 from '../components/TestingJSON/games3.json'
import Pagination from '../components/Pagination';

//Testin elements
const API_KEY_CIBER = 'c21a2e0bd365470f86ef5fb3a5ce67b0';


const SearchGames = (props) => {
    const API_KEY = "c4191c510ad54fb8a7ee5b559e1b712e";
    const url = "https://api.rawg.io/api/games?"
    const page_size = 30;

    let urlAxios = `${url}page_size=${page_size}&key=${API_KEY_CIBER}`;

    const [games, setGames] = useState({});

    useEffect(() => {  
        const getGames = async () => {
            console.log("urlPage: "+props.urlPage);
            if(props.urlPage!==1){
                urlAxios+=`&page=${props.urlPage}`
            }
            const res = await axios.get(urlAxios);     
            setGames(res.data);
            //setGames(gamesJSON_1.results);                   
        }
        
        getGames();
        window.scrollTo(0, 0);
    }, [games.count, games.next, props.url, props.urlPage]); 
    
   

    if(props.url){
        urlAxios=`${url}page_size=${page_size}&${props.url}&key=${API_KEY_CIBER}`;        
    }

    const onClickBtnPagination = (name)=>{
        props.onPageChange(name); 
    }


    if(games.results !== undefined){
     
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
                <Pagination 
                    pageSize={page_size} 
                    count={games.count} 
                    url={urlAxios}
                    next={games.next}
                    previous={games.previous}
                    urlPage={props.urlPage}
                    onClickBtnPagination = {onClickBtnPagination}
                    />
                    
                
            </section>
            
        );

    }

}

export default SearchGames;