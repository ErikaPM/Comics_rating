import React, {useState} from 'react';
import StarsRating from '../components/StarsRating';
import { Link } from 'react-router-dom';
import '../assets/styles/components/StarRating.scss';

const RatingView = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const onMouseEnter =(index) =>{
        setHover(index);
    };
    const onMouseLeave =() =>{
        setHover(0);
    };
    const onSave =(index) =>{
        setRating(index);
    };
    return (
        <div className="stars-container"> Selecciona la calificación:
            <div className = "stars-array" >
                {[1,2,3,4,5].map((index) => {
                    return (
                        <StarsRating 
                            index={index} 
                            hover={hover}
                            rating={rating} 
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave} 
                            onSave={onSave} 
                        />
                    )
                })}
            </div>
            <Link to ="/">
            <button className = "btn btn-primary ready-button">Volver al home</button>
            </Link>
        </div> 
    )
}

export default RatingView;