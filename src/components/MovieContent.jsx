import React from 'react';
import './movieContent.css';
import titleImg from '../images/transformer-title.png';
import Button from './Button';

function MovieContent() {
  return (
    <div className="content active">
        <img src={titleImg} alt="Movie Title" className="movie-title"/>
            <h4>
                <span>Year</span>
                <span><i>age</i></span>
                <span>length</span>
                <span>category</span>
            </h4>
                <p>This is the description of the movie here so we'll inform you 
                    according as we go on in the movie application here. For the best movies that you would want to watch for the rest of your life.
                    Filmpire is here for the best of the best that you could enjoy quite well.
                    And you could role with it when chilling and sipping on your wine.
                </p>
            <div className="button"> 
               <Button 
                icon={<ion-icon name="bookmark-outline"></ion-icon>}
                name="Book"
                color="#ff3700"
                bgColor="#ffffff"
               />
               <Button 
                icon={<ion-icon name="add"></ion-icon>}
                name="My Playlist"
               />
            </div>
    </div>
  )
}

export default MovieContent;