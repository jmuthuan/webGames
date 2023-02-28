/* import { useState } from 'react';
import genres from './TestingJSON/genresJSON.json'; */
import './AsideNav.css';
import Genres from './Genres';

const AsideNav = (props) => {
    /* const [hide_show, toggleHideShow] = useState(false); */

   /*  const toggleButton = () => {
        toggleHideShow(!hide_show);
    }

    const genresMap = new Map([
        ["action", false],
        ["indie", false],
        ["adventure", false],
        ["role-playing-games-rpg", false],
        ["strategy", false],
        ["shooter", false],
        ["casual", false],
        ["simulation", false],
        ["puzzle", false],
        ["arcade", false],
        ["platformer", false],
        ["racing", false],
        ["massively-multiplayer", false],
        ["sports", false],
        ["fighting", false],
        ["family", false],
        ["board-games", false],
        ["educational", false],
        ["card", false]
    ]);
 */
    return (
        <aside className='aside_nav'>
            <Genres
                genres={props.genres}
                hideGenres={props.hideGenres}
                showButton={true}
                hamburger={false}
                toggleGenreButton={props.onClickToggleShowGenres}
                onClickGenreBtn={props.onClickGenreBtn}
            />
        </aside>
    );
}

export default AsideNav;