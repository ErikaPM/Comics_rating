import React, { useState, useEffect } from 'react';
import Comics from '../components/Comics';
import RatingView from '../components/RatingView';

const Rating = () => {
    const min = 1;
    const max = 2459;
    const randomPath = () => Math.floor(Math.random() * (max - min + 1) + min);
    const API = `https://xkcd.com/${randomPath()}/info.0.json`;
    const [comic, setComics] = useState([]);
    useEffect(() => {
      fetch(API)
        .then(response => response.json())
        .then(data => setComics(data)); 
    }, []);
    return (
        <div className= "main">
            <div className="rating-container">
            <Comics key={comic.num} {...comic}/>
            <RatingView />
            </div>
        </div>
    )
}

export default Rating;