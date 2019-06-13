
const searchingFilmLink = (state = '', {type, searchingFilmLink}) => {   //action в итоге надо деструктурировать
	switch (type) {
		case 'SEARCH_FILM_DETAILS':
			return 	searchingFilmLink;
		case 'HIDE_FILM_DETAILS':
			return 	searchingFilmLink;
		default:
			return state
	}
}

export default searchingFilmLink;
