import { useState } from 'react';
import genres from './TestingJSON/genresJSON.json';
import './AsideNav.css';

const AsideNav = (props) => {
    const [hide_show, toggleHideShow] = useState(false);       
    
    const toggleButton = () => {
        toggleHideShow(!hide_show);
    }    

    const genresMap = new Map([
        ["action",false],     
        ["indie", false],        
        ["adventure", false], 
        ["role-playing-games-rpg", false],
        ["strategy",false],
        ["shooter",false],
        ["casual",false],
        ["simulation",false],
        ["puzzle",false],
        ["arcade",false],
        ["platformer",false],
        ["racing",false],
        ["massively-multiplayer",false],
        ["sports",false],
        ["fighting",false],
        ["family",false],
        ["board-games",false],
        ["educational",false],
        ["card",false]

    ]);

    /* const [genreToggle, setGenreToggle] = useState(genresMap);

    const onClickGenreBtn = (name) =>{
        let text =[];             
        setGenreToggle(new Map(genreToggle.set(name, !genreToggle.get(name))));

        genreToggle.forEach((value, key)=>{
            if(value){
                text.push(key)
            }             
        })        
    } */

    return (        
        <aside className='aside_nav'>
            <nav className="aside_nav_container">
                <a className="home" href="http://localhost:3000/">Home</a>

                {
                    genres.results.map((genre, index) => {
                        let hide_flag = "block";
                        if (index > 3 && !hide_show) {
                            hide_flag = "none"
                        }
                        
                        return (
                            <button
                                type="button"
                                className={`btn_genre btn_genre_${props.genres.get(genre.slug)? 'on':'off'}`}
                                value={genre.slug}
                                key={genre.slug}
                                onClick={()=>props.onClickGenreBtn(genre.slug)}
                                style={
                                    {
                                        display: hide_flag
                                    }
                                }>
                                {genre.name}                                
                            </button>
                        );

                    })
                }

                <button type='button' className='btn_show_hide btn_genre' value='hide' onClick={toggleButton}>
                    {!hide_show ? 'Show All' : 'Hide'}
                </button>

            </nav>
        </aside>

    );
}

export default AsideNav;