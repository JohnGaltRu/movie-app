const searchingFilmLink = (state = "", { type, searchingFilmLink }) => {
  switch (type) {
    case "SEARCH_FILM_DETAILS":
      return searchingFilmLink;
    case "HIDE_FILM_DETAILS":
      return searchingFilmLink;
    default:
      return state;
  }
};

export default searchingFilmLink;
