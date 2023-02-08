import './Filters.css';
import { FaPlaystation, FaXbox, FaWindows } from "react-icons/fa";
import { SiNintendo } from 'react-icons/si';
import { useState } from 'react';


const Filters = () => {
    const [toggleButton, setToggleButton] = useState([false, false, false, false]); //[xbox, pc, playstation, nintendo]

    const onClickToggleBtn = (indexBtn) => {
        const toggle = toggleButton.map((element, index) => {
            if (index === indexBtn) {
                return !element;
            }
            else {
                return element;
            }
        })
        setToggleButton(toggle);
    }


    return (
        <section className='title_filters'>
            <div className="filters_container">
                <div className="filter_title">All Games</div>
                <div className='filter_platforms'>Platforms:
                    <button
                        type="button"
                        className={`btn_platform ${toggleButton[0] ? "btn_platform_true" : "btn_platform_false"}`}
                        value="xbox"
                        onClick={() => onClickToggleBtn(0)}>
                        <FaXbox className='platform_icon' />
                        Xbox
                    </button>
                    <button
                        type="button"
                        className={`btn_platform ${toggleButton[1] ? "btn_platform_true" : "btn_platform_false"}`}
                        value="pc"
                        onClick={() => onClickToggleBtn(1)}>
                        <FaWindows className='platform_icon' />
                        PC
                    </button>
                    <button
                        type="button"
                        className={`btn_platform ${toggleButton[2] ? "btn_platform_true" : "btn_platform_false"}`}
                        value="playsation"
                        onClick={() => onClickToggleBtn(2)}>
                        <FaPlaystation className='platform_icon' />
                        Playstation
                    </button>
                    <button
                        type="button"
                        className={`btn_platform ${toggleButton[3] ? "btn_platform_true" : "btn_platform_false"}`}
                        value="nintendo"
                        onClick={() => onClickToggleBtn(3)}>
                        <SiNintendo className='platform_icon' />
                        Nintendo
                    </button>
                </div>

            </div>
        </section>

    );
}

export default Filters;