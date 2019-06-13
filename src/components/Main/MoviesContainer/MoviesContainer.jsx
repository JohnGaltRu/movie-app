import React, { Component } from 'react';
import {apiURL, apiKey} from '.../../../config.js';
import './MoviesContainer.css';
import { connect } from 'react-redux';
import { showFilmDetailsAction } from './../../../redux/actions/actionCreator.js';


class MoviesContainer extends Component{
  state = {
      searchValue: '',   //`${apiURL}/movie/popular${apiKey}`,
      moviesList: []
  }

 // this.setState({searchValue: this.props.searchValue});

  componentDidMount(){
    fetch(`${apiURL}/movie/popular${apiKey}`)
      .then(res => res.json())
      .then(res => this.setState({ moviesList: res.results }))
      .catch(error => console.log(error.message))        
  }

  componentDidUpdate(){
    if (this.props.searchValue.length > 0 && this.props.searchValue !== this.state.moviesList ) 
    {fetch(this.props.searchValue)
      .then(res => res.json())
      .then(res => { this.setState({ moviesList: res.results })})
      .catch(error => console.log(error.message))     
    }
  }

  showModalWindow(target){ 
    this.props.showFilmDetailsAction(
      `${apiURL}/movie/${target.name}${apiKey}&append_to_response=videos,images`
    )

    //fetch(`https://api.themoviedb.org/3/movie/157336?api_key=2973b5ea282e5fd4b5f250885f41a7a3&append_to_response=videos,images`)
    //.then(res => res.json())
    //.then(res => console.log(res))
  };

  render(){
    const imgURL= 'http://image.tmdb.org/t/p/w500';
    const movies= this.state.moviesList.map((movie, index) => {
      return(
        <div key={ index } className='movie-card'>
          <div>
            <img width= '100%' src={ imgURL + movie.poster_path } name= { movie.id } 
              onClick= { (e) => this.showModalWindow(e.target) } alt='movie poster' className= 'moviePoster'>
            </img>
          </div>
          <div className= 'titleAndRatingContainer'>  
            <div>
              <h3>{ movie.original_title }</h3>
            </div>
            <div className= 'RatingContainer'>
              <p>Rating: { movie.vote_average }/10</p>
              <button type='button' className= "showDetailsBtn"
                name= { movie.id } onClick= { (e) => this.showModalWindow(e.target) } >Show details
              </button>
            </div>  
          </div>  
        </div>
      )
    });

    return(
      <div className='movies-container-main'>
        { movies }
      </div>
    )
  }
}

export default connect(state => ({ searchValue: state.searchValue }), { showFilmDetailsAction }
)(MoviesContainer)