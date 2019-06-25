const searchValue = (state = "", { type, searchingFilmCollectionLink }) => {
  switch (type) {
    case "SEARCH_FILM_COLLECTION":
      return searchingFilmCollectionLink;
    default:
      return state;
  }
};

export default searchValue;
