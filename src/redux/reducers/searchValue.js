
const searchValue = (state = '', {type, searchingFilmCollectionLink}) => {   //action в итоге надо деструктурировать
	switch (type) {
		case 'SEARCH_FILM_COLLECTION':
			return 	searchingFilmCollectionLink;
		default:
			return state
	}

}

export default searchValue;