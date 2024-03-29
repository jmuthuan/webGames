import { bubble as Menu } from 'react-burger-menu';
import Genres from './Genres';
import './HamburgerMenu.css';

const HamburgerMenu = (props) => {

    return (
        <div className='hamburger-wrapper'>
            <Menu>                
                <Genres
                    genres={props.genres}
                    onClickGenreBtn={props.onClickGenreBtn}                    
                    hideGenres={true}
                    showButton={false}
                    hamburger={true}
                    toggleGenreButton={props.onClickToggleShowGenres}                
                />
            </Menu>
        </div>
    )
}

export default HamburgerMenu;