import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import SearchGames from '../controllers/SearchGames';
import CardGame from '../components/CardGame';
import Filters from '../components/Filters';
import AsideNav from '../components/AsideNav';
import Header from '../components/Header';
import { useState } from "react";

const SearchData = () => {
    /*  const state = {
         platforms: [false, false, false, false], //[xbox, pc, playstation, nintendo]
         genres: "",
         searchText: "",
     } */
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
        //console.log("props: " + toggle);
    }

    //Header component functions
    const onClickSearch = () => {

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
                }
            })
            platformQuery = platformQuery.slice(0, platformQuery.length - 1);
        }

        //search Query
        let searchQuery = "";
        if (searchState) {
            searchQuery = `search=${searchState}`.replaceAll(' ', '%20');      //change spaces for %20
        }

        //genres Query
        let genreQuery = "";
        let genreArray = [];
       
        genresState.forEach((value, key) => {
            if (value) {
                genreArray.push(key)
            }
        })
        if (genreArray.length) {
            genreQuery = `genres=${genreArray.toString()}`;
        }

        setUrlState(`${platformQuery}${searchQuery ? '&' + searchQuery : ''}${genreQuery ? '&' + genreQuery : ''}`);
        navigate("/search");
    }

    const onChangeText = (text) => {
        setSearch(text);
    }

    //AsideNav component functions
    const onClickGenreBtn = (name) => {
        setGenres(new Map(genresState.set(name, !genresState.get(name))));
    }


    return (
        <div className="main_page_wraper">
            <Header
                textValue={searchState}
                onClickSearch={onClickSearch}
                onChangeText={onChangeText} />
            <main>
                <AsideNav
                    genres={genresState}
                    onClickGenreBtn={onClickGenreBtn} />
                <Filters
                    platforms={platformState}
                    onPlatformChange={togglePlatforms} />

                <Routes>
                    <Route path="/" element={<SearchGames url={urlState} />} />
                    <Route path="/search" element={<SearchGames url={urlState} />} />
                    <Route path='/games/:slug' element={<CardGame />} />
                </Routes>

            </main>
        </div>
    );
}

export default SearchData;