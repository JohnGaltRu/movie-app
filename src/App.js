import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import SearchBar from './components/Main/SearchBar/SearchBar.jsx';
import MoviesContainer from './components/Main/MoviesContainer/MoviesContainer.jsx';
import ModalMovieContainer from './components/ModalMovieContainer/ModalMovieContainer.jsx';
import  PortalForModalMovieContainer from './components/ModalMovieContainer/PortalForModal.jsx';

function App() {
    return (
    	<>
    		<NavBar/>
        	<SearchBar/>
			<MoviesContainer/>
			<PortalForModalMovieContainer>
            <ModalMovieContainer/>
			</PortalForModalMovieContainer>	
        </>
    );
}

export default App;


