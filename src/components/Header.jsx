import { useState } from "react";


const Header = () => {
    const [searchText, setSearchText] = useState("");

    const changeText = (e) =>{
        setSearchText(e.target.value);
    }

    const SearchButtonAction = (e) =>{
        e.preventDefault();
    return(        
        console.log("Search Button: "+searchText)
    );
}


    return (
        <header className="App-header">
            <div className='header_container'>
                <div>Web Games</div>
                <form className="search_form" role="search">
                    <input
                        className="search_bar"
                        type="search"
                        placeholder="Search Game"
                        aria-label="Search" 
                        value={searchText}
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
