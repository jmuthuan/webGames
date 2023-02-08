import { FaPlaystation,FaXbox, FaWindows } from "react-icons/fa";
import { SiNintendo } from 'react-icons/si';

/*
parent_paltforms
1 - PC
2 - Playstation
3 - Xbox
4 - iOS
5 - Apple Macintosh
6 - Linux
7 - Nintendo   
8 - Android 
*/


function Cards (props) {   
    const colorsPlatforms = ["","#FFFFFF", "#276CB4", "#027701","","", "","#DB1D07"];
    const parent_platforms = props.game.parent_platforms.map(element =>{
       return element.platform.id
    });
    
        return(
                <div className="card_1">
                    <div className="background_image"><img src={props.game.background_image} alt={`from ${props.game.name}`} ></img></div>   
                    <div className="info">
                        <div className="platforms">
                            <FaPlaystation color={colorsPlatforms[2]} display={parent_platforms.includes(2) ? "inline-block" : "none"}/>
                            <FaWindows color={colorsPlatforms[1]} display={parent_platforms.includes(1) ? "inline-block" : "none"} />
                            <FaXbox color={colorsPlatforms[3]} display={parent_platforms.includes(3) ? "inline-block" : "none"}/>
                            <SiNintendo color={colorsPlatforms[7]} display={parent_platforms.includes(7) ? "inline-block" : "none"}/>

                        </div>
                        <div className="game_title">{props.game.name}</div>
                        <div className="rating">Rating: {props.game.rating}/5.00</div>
                        <div className="rating">ESRB: {props.game.esrb_rating.name}</div>
                    </div>
                </div>

        );    
}

export default Cards;