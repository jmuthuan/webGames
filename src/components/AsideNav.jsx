import { useState } from 'react';
import genres from './TestingJSON/genresJSON.json';
import './AsideNav.css';

const AsideNav = () => {

    const [hide_show, toggleHideShow] = useState(false);

    const toggleButton = () => {
        toggleHideShow(!hide_show);
    }

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
                                className="btn_genre"
                                value={genre.slug}
                                key={genre.slug}
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