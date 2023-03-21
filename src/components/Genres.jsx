import genres from './TestingJSON/genresJSON.json';
import { useState } from 'react';

const Genres = (props) => {

    /* const [hide_show, toggleHideShow] = useState(false);   */     
    
    const toggleButton = () => {
        props.toggleGenreButton(props.hideGenres);
    }     

    /* 
    hideGenres={props.hideGenres}
    toggleGenreButton={props.toggleGenreButton} */

    return (
        <nav className={`aside_nav_container ${props.hamburger?'aside_container_flex':''}`}>
                {/* <a className="home" href="http://localhost:3000/">Home</a> */}
                <a className="home" href='/'>Home</a>
                
                {
                    genres.results.map((genre, index) => {
                        let hide_flag = "btn_show";
                        if (index > 3 && !props.hideGenres) {
                            hide_flag = "btn_hide"
                        }
                        
                        return (
                            <button
                                type="button"
                                className={`btn_genre btn_genre_${props.genres.get(genre.slug)? 'on':'off'} ${hide_flag}`}
                                value={genre.slug}
                                key={genre.slug}
                                onClick={()=>props.onClickGenreBtn(genre.slug)}
                                /* style={
                                    {
                                        display: hide_flag
                                    }
                                } */>
                                {genre.name}                                
                            </button>
                        );
                    })
                }

                <button 
                type='button' 
                className={`btn_show_hide btn_genre ${props.showButton?'':'btn_hide'}` }
                value='hide' 
                onClick={toggleButton}>
                    {!props.hideGenres ? 'Show All' : 'Hide'}
                </button>
            </nav>
    )
}

export default Genres;