import React from 'react';
import './NavBar.css';
import ReactSVG from '.../../../public/images/React.svg';
import TheMovieDB from '.../../../public/images/TheMovieDB.svg';
import IMDB from '.../../../public/images/IMDB.svg';

export default function NavBar() {
    return(
    <div className='nav-container'>
        <img src={ReactSVG} width="70px" alt= 'React'/>   
        <img src={TheMovieDB} width="70px" alt= 'TheMovieDB'/>  
        <img src={IMDB} width="70px" alt= 'IMDB'/>  
      </div>
    )
  }
