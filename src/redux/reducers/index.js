import { combineReducers } from "redux";
import searchValue from "./searchValue";
import searchingFilmLink from "./searchFilmDetails";

const rootReducer = combineReducers({ searchValue, searchingFilmLink });
export default rootReducer;
