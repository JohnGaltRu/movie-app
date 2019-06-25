export const moviesListAction = searchValue => ({
  type: "SEARCH_FILM_COLLECTION",
  searchingFilmCollectionLink: searchValue
});

export const showFilmDetailsAction = searchValue => ({
  type: "SEARCH_FILM_DETAILS",
  searchingFilmLink: searchValue
});

export const hideFilmDetailsAction = searchValue => ({
  type: "HIDE_FILM_DETAILS",
  searchingFilmLink: ""
});
