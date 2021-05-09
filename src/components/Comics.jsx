import React from 'react';
import '../assets/styles/components/Comics.scss';

const Comics = ({title, img, alt}) => {
    return (
        <div className="comics-container">
            <div className="comic-title">{title}</div>
            <div className="comic-description">{alt}</div>
            <div className="comic">
                <img className= "comic-img" src= {img} alt="title"/>
            </div>
        </div> 
    );
}

export default Comics;