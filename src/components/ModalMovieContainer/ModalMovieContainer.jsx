import  './ModalMovieContainer.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import IMDB from '.../../../public/images/IMDB.svg';
import { hideFilmDetailsAction } from './../../redux/actions/actionCreator.js';

class ModalMovieContainer extends Component{

	state = {
		movie: ''
	}

	componentDidMount() {
		this.escapePressHandler = this.escapePressHandler.bind(this)
		document.body.addEventListener('keydown', this.escapePressHandler)
	}

	componentDidUpdate(){
		if (this.props.searchingFilmLink.length > 0 && this.props.searchingFilmLink !== this.state.moviesList ) 
			{ document.getElementById('root').style.position = "fixed";
    		fetch(this.props.searchingFilmLink)
      		.then(res => res.json())
      		.then(res => { this.setState({ movie: res })})
      		.catch(error => console.log(error.message))     
    	}
    	else { document.getElementById('root').style.position = ""; }
    };

    genreConcat() {
    	let genreArr = []
    	this.state.movie.genres.map( (i) => {genreArr.push(i.name)} ) 
    	return genreArr.join(', ')
    };

    hideCover() {
    	document.body.removeChild(document.querySelector('.exitBtn'));
    	document.querySelector('.root').style.position = "";
	};

	hideModalWindow(){ this.props.hideFilmDetailsAction() }

	escapePressHandler(e) { if (e.keyCode === 27) { this.hideModalWindow() } }

	render() {
		const imgURL= 'http://image.tmdb.org/t/p/w500';
		let movie = this.state.movie;
		return (
		<>	
			{ this.props.searchingFilmLink && <div className= 'modalWindow'>
				<div className= 'coverDiv'></div>
				<div className= 'upperCoverDiv'>
					<div className= 'MovieWrapper'>
						<img width= '40%' alt='movie poster' src= {imgURL + movie.poster_path } className= 'movie poster' ></img>
						<div className= 'movieDescription'>
							<p className= 'exitBtn' onClick= { () => this.hideModalWindow() } >[X]</p>
							<h2>{movie.title}</h2>
							<p>{movie.overview}</p>
							<p><span className='descriptionParam'>IMDB Rating:</span><span>{movie.vote_average}</span></p>
							{ movie.genres && 
								<p><span className='descriptionParam'>Genres:</span><span>{this.genreConcat()}</span></p> 
							}
							<p><span className='descriptionParam'>Release Date:</span><span>{movie.release_date}</span></p>
							<p><span className='descriptionParam'>Budget:</span><span>{`$ ${movie.budget / 1000000} m.`}</span></p>
							<a className= 'IMDb_button' target= '_blank' rel="noopener noreferrer"
							href= { `https://www.imdb.com/title/${movie.imdb_id}/?ref_=nv_sr_1?ref_=nv_sr_1` }>
								<img src={IMDB} width="80px" alt='movie poster' />
							</a>
						</div>	
					</div>
				</div> 
			</div>
			}
		</>	
		)	
	} 
}	

export default connect(state => ({ searchingFilmLink: state.searchingFilmLink }), { hideFilmDetailsAction }
)(ModalMovieContainer)






