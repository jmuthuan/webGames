import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";


const Header = (props) => {

    const changeText = (e) =>{
        props.onChangeText(e.target.value);
    }

    const SearchButtonAction = (e) =>{
        e.preventDefault();
        props.onClickSearch();    
    }


    return (
        <header className="App-header">
            <HamburgerMenu
                genres={props.genres}
                onClickGenreBtn={props.onClickGenreBtn} />

            <div className='header_container'>      
                <Link className="about" to={'/about'}>About</Link>
                <div>Video Games Club</div>                
                <form className="search_form" role="search">
                    <input
                        className="search_bar"
                        type="search"
                        placeholder="Search Game"
                        aria-label="Search" 
                        value={props.textValue}
                        onChange={changeText}/>
                    <button
                        className="search_btn"
                        type="submit"
                        onClick={SearchButtonAction}>
                        Search
                    </button>
                </form>
            </div>
        </header>
    )
}

export default Header;
