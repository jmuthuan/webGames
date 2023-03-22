import './Filters.css';
import { FaPlaystation, FaXbox, FaWindows } from "react-icons/fa";
import { SiNintendo } from 'react-icons/si';
import { TfiLayoutGrid3 } from 'react-icons/tfi';
import { CgDisplayFullwidth } from 'react-icons/cg';



const Filters = (props) => {

    const toggleButton = props.platforms; //[xbox, pc, playstation, nintendo]

    const onClickToggleBtn = (indexBtn) => {
        props.onPlatformChange(indexBtn);
    }


    const onClickOrderBy = (e) => {
        switch (e.target.getAttribute("value")) {
            case "rating":
                props.onClickOrderBy("-rating");
                break;

            case "metacritic":
                props.onClickOrderBy("-metacritic");
                break;

            case "released":
                props.onClickOrderBy("-released");
                break;


            default:
                props.onClickOrderBy(e.target.getAttribute("value"))
                break;
        }
    }

    let orderBy;
    switch (props.orderBy) {
        case "name":
            orderBy = "Name"
            break;

        case "-released":
            orderBy = "Released Date"
            break;

        case "relevance":
            orderBy = "Relevance"
            break;

        case "-metacritic":
            orderBy = "Popularity"
            break;

        case "-rating":
            orderBy = "Average Rating"
            break;

        default:
            break;
    }

    const onClickDisplay = (e) => {
        props.onClickDisplayOptions(e.target.getAttribute("value"));
    }

    return (        
        <section className='filters_wrapper'>            
            <div className="filters_container">
                <div className="filter_title">
                    <div className='filter_main_title'>{props.filterTitle[0]}</div>
                    <div className='filter_subtitle'>{props.filterTitle[1]} {props.filterTitle[2]} </div>
                </div>

                <div className='displayOption'>Display Options:
                    <div
                        className={`displayOptionBtn ${props.displayOption === "grid" ? "gridActive" : ""}`}
                        type='button'
                        name="grid_3x3"
                        value="grid"
                        onClick={onClickDisplay}>
                        <TfiLayoutGrid3 />
                    </div>
                    <div
                        className={`displayOptionBtn ${props.displayOption === "full" ? "fullActive" : ""}`}
                        type='button'
                        name="full"
                        value="full"
                        onClick={onClickDisplay}>
                        <CgDisplayFullwidth />
                    </div>
                </div>

                <div className='filter_found'>Found {props.countFound} items</div>

                <div className='filter_platforms'>Platforms: <br />
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

                <div className='filter_orderBy'>Order By:
                    <div className="dropdown" id="dropdown_orderBy">
                        <button className="btn btn-secondary dropdown-toggle" id="dropdownBtn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {orderBy}
                        </button>
                        <ul className="dropdown-menu" id="dropdown-show">
                            <li>
                                <button className="dropdown-item"
                                    onClick={onClickOrderBy}
                                    value="relevance">
                                    Relevance</button></li>
                            <li>
                                <button className="dropdown-item"
                                    onClick={onClickOrderBy}
                                    value="name">
                                    Name</button></li>
                            <li>
                                <button className="dropdown-item"
                                    onClick={onClickOrderBy}
                                    value="released">
                                    Released Date</button></li>
                            <li>
                                <button className="dropdown-item"
                                    onClick={onClickOrderBy}
                                    value="metacritic">
                                    Popularity</button></li>
                            <li>
                                <button className="dropdown-item"
                                    onClick={onClickOrderBy}
                                    value="rating">
                                    Average Rating</button></li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>

    );
}

export default Filters;