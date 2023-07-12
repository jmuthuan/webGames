import axios from 'axios'
import { useState, useEffect } from 'react';
import Cards from '../components/Cards';
import { Link } from 'react-router-dom';

import Pagination from '../components/Pagination';


const SearchGames = (props) => {
    const API_KEY = "c4191c510ad54fb8a7ee5b559e1b712e";
    const url = "https://api.rawg.io/api/games?"
    const page_size = 30;

    let urlAxios = `${url}page_size=${page_size}&ordering=${props.orderBy}&key=${API_KEY}`;

    const [games, setGames] = useState({});



    useEffect(() => {  
        const getGames = async () => {            
            if(props.urlPage!==1){
                urlAxios+=`&page=${props.urlPage}`
            }
            const res = await axios.get(urlAxios);     
            setGames(res.data);
            props.onChangeFoundItems(res.data.count);
            window.scrollTo(0, 0);                
        }

        getGames();
        
    }, [props.url , props.urlPage, props.orderBy ]); 
    
    

    if(props.url){
        urlAxios=`${url}page_size=${page_size}&ordering=${props.orderBy}&${props.url}&key=${API_KEY}`;        
    }

    const onClickBtnPagination = (name)=>{
        props.onPageChange(name); 
    }


    if(games.results !== undefined){     
        return (
            <section className={`main_card ${props.displayOption ==="grid"? "main_grid": "main_full"}`}>               
                {           
                    games.results.map((game) => {
                        return (
                            <Link to={`/games/${game.slug}`} key={game.id}>
                                <Cards  game={game} key={game.id} displayOption={props.displayOption} />
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