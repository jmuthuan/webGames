import { Routes, Route, useNavigate } from "react-router-dom";
import SearchGames from '../controllers/SearchGames';
import CardGame from '../components/CardGame';
import Filters from '../components/Filters';
import AsideNav from '../components/AsideNav';
import Header from '../components/Header';
import { useEffect, useState } from "react";


const SearchData = () => {
    
    const [platformState, setPlatforms] = useState([false, false, false, false]);
    const [genresState, setGenres] = useState(new Map([
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
    ]
    ));
    const [searchState, setSearch] = useState("");
    const [urlState, setUrlState] = useState("");
    const [urlPageState, setUrlPageState] = useState(1);
    const [orderByState, setOrderByState] = useState("relevance");
    const [filterTitleState, setFilterTitleState] = useState(["All Games","",""]);
    const [countFoundState, setCountFoundState] = useState(0);
    const [displayOptionState, setDisplayOptionState] = useState("grid"); //grid or full
    const [hideGenresState, setHideGenresState] = useState(false);

    const navigate = useNavigate();

    //Filters component functions
    const togglePlatforms = (indexBtn) => {
        const toggle = platformState.map((element, index) => {
            if (index === indexBtn) {
                return !element;
            }
            else {
                return element;
            }
        })
        setPlatforms(toggle);
    }

    //Header component functions
    const onClickSearch = () => {        
        //search Query
        let searchQuery = "";
        if (searchState) {
            searchQuery = `search=${searchState}`.replaceAll(' ', '%20');      //change spaces for %20
        }

        //genres Query
        let genreQuery = "";
        let genreArray = [];

        let title=["All Games","",""];
        if (searchState) {
            title[0]=`Results for "${searchState}"`;
        }

        genresState.forEach((value, key) => {
            if (value) {
                genreArray.push(key)
            }
        })
        if (genreArray.length) {
            genreQuery = `genres=${genreArray.toString()}`;
            title[1]=" (Genres Selelected) ";
        }
         
        //platform Query
        let platformQuery = "";
        if (platformState.some((element) => element === true)) {
            platformQuery = "parent_platforms=";
            platformState.map((element, index) => {
                switch (index) {
                    case 0:
                        if (element) {
                            platformQuery += "3,";//xbox
                        }
                        break;
                    case 1:
                        if (element) { platformQuery += "1," }; //PC                    
                        break;
                    case 2:
                        if (element) {
                            platformQuery += "2,"; //Playstation
                        }
                        break;
                    case 3:
                        if (element) {
                            platformQuery += "7,"; //Nintendo
                        }
                        break;
                    default:
                        break;    
                }
            })
            platformQuery = platformQuery.slice(0, platformQuery.length - 1);
            title[2]=" (Platforms selected) ";
        }

        setFilterTitleState(title);
        setUrlState(`${platformQuery}${searchQuery ? '&' + searchQuery : ''}${genreQuery ? '&' + genreQuery : ''}`);
        setUrlPageState(1);
        navigate("/search");
    }

    const onChangeText = (text) => {
        setSearch(text);
    }

    //AsideNav component functions
    const onClickGenreBtn = (name) => {
        setGenres(new Map(genresState.set(name, !genresState.get(name))));
    }

    //Pagination page change
    const onPageChange = (page) => {
        if (!isNaN(page)) {
            setUrlPageState(page);
        }
    }

    //OrderBy dropdown Menu
    const onClickOrderBy = (value) => {
        setOrderByState(value);
        setUrlPageState(1);
    }

    //Found items title
    const onChangeFoundItems = (count) => {
        setCountFoundState(count);
    }

    //display Option: grid or full display
    const onClickDisplayOptions = (option) => {
        setDisplayOptionState(option);
    }

    //toggle hide_show genres Button
    const toggleGenreButton = (toggleGeneres) => {
        setHideGenresState(!toggleGeneres);
    }  

    useEffect(() => {
        onPageChange();
    }, [urlPageState])

    return (
        <div className="main_page_wraper">          
            <Header
                textValue={searchState}
                genres={genresState}
                onClickGenreBtn={onClickGenreBtn}
                onClickSearch={onClickSearch}
                onChangeText={onChangeText} />

            <main className="main">
                <AsideNav
                    genres={genresState}
                    hideGenres={hideGenresState}
                    onClickToggleShowGenres={toggleGenreButton}
                    onClickGenreBtn={onClickGenreBtn} />
                <Filters
                    platforms={platformState}
                    orderBy={orderByState}
                    filterTitle={filterTitleState}
                    countFound={countFoundState}
                    displayOption={displayOptionState}
                    onPlatformChange={togglePlatforms}
                    onClickOrderBy={onClickOrderBy}
                    onClickDisplayOptions={onClickDisplayOptions} />
                <Routes>
                    <Route
                        path="/"
                        element={<SearchGames
                            url={urlState}
                            urlPage={urlPageState}
                            orderBy={orderByState}
                            displayOption={displayOptionState}
                            onChangeFoundItems={onChangeFoundItems}
                            onPageChange={onPageChange} />} />
                    <Route
                        path="/search"
                        element={<SearchGames
                            url={urlState}
                            urlPage={urlPageState}
                            orderBy={orderByState}
                            displayOption={displayOptionState}
                            onChangeFoundItems={onChangeFoundItems}
                            onPageChange={onPageChange} />} />
                    <Route
                        path='/games/:slug'
                        element={<CardGame />} />
                </Routes>

            </main>
            <footer className="footer">
                <div> Developed by: José Muthuan</div>
                <div>Copyright © {new Date().getFullYear()} - All Rights Reserved</div>
            </footer>
        </div>
    );
}

export default SearchData;