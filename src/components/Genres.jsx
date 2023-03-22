import genres from './TestingJSON/genresJSON.json';

const Genres = (props) => {   
    
    const toggleButton = () => {
        props.toggleGenreButton(props.hideGenres);
    }     

    return (
        <nav className={`aside_nav_container ${props.hamburger?'aside_container_flex':''}`}>          
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
                                >
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