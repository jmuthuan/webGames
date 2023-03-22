import './AsideNav.css';
import Genres from './Genres';

const AsideNav = (props) => {
    
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