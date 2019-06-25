import React, { Component } from "react";
import "./SearchBar.css";
import { apiURL, apiKey } from ".../../../config.js";
import { connect } from "react-redux";
import { moviesListAction } from "./../../../redux/actions/actionCreator.js";

class SearchBar extends Component {
  state = {
    searchValue: "",
    moviesList: [],
    burgerMenuBtnClassList: "burgerMenu",
    burgerMenuListClassList: "burgerMenuList"
  };

  handleSearchInput(input) {
    this.setState({ searchValue: input });
  }

  submitSearch(searchValue) {
    if (searchValue) {
      this.props.moviesListAction(
        `${apiURL}/search/movie${apiKey}&language=en-US&page=1&include_adult=false&query=${searchValue}`
      );
    }
  }

  showCollection(searchValue) {
    this.props.moviesListAction(`${apiURL}/movie/${searchValue}${apiKey}`);
  }

  burgerMenuClassListToggle() {
    this.state.burgerMenuBtnClassList === "burgerMenu"
      ? this.setState({ burgerMenuBtnClassList: "burgerMenu open" })
      : this.setState({ burgerMenuBtnClassList: "burgerMenu" });
    this.state.burgerMenuListClassList === "burgerMenuList"
      ? this.setState({ burgerMenuListClassList: "burgerMenuList open" })
      : this.setState({ burgerMenuListClassList: "burgerMenuList" });
  }

  enterPressHandler(e) {
    if (e.charCode === 13 && this.state.searchValue) {
      this.submitSearch(this.state.searchValue);
    }
  }

  componentDidMount() {
    this.enterPressHandler = this.enterPressHandler.bind(this);
    document.body.addEventListener("keypress", this.enterPressHandler);
  }

  render() {
    return (
      <div className="search-container">
        <h1 className="search-title">THE MOVIE DB</h1>
        <div className="searchbar-container">
          <input
            className="searchbar"
            type="text"
            placeholder="Search films or tv series ..."
            onChange={e => this.handleSearchInput(e.target.value)}
          ></input>
          <button
            className="btn search-btn"
            onClick={() => {
              this.submitSearch(this.state.searchValue);
            }}
          >
            SEARCH
          </button>
          <div
            className={this.state.burgerMenuBtnClassList}
            onClick={() => {
              this.burgerMenuClassListToggle();
            }}
          >
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </div>
        </div>
        <div className="searchMenu-container">
          <button
            className="btn searchMenu-btn"
            onClick={() => {
              this.showCollection("now_playing");
            }}
          >
            Now playing
          </button>
          <button
            className="btn searchMenu-btn"
            onClick={() => {
              this.showCollection("popular");
            }}
          >
            Popular
          </button>
          <button
            className="btn searchMenu-btn"
            onClick={() => {
              this.showCollection("upcoming");
            }}
          >
            Upcoming
          </button>
          <button
            className="btn searchMenu-btn"
            onClick={() => {
              this.showCollection("top_rated");
            }}
          >
            Top rated
          </button>
        </div>
        <div
          className={this.state.burgerMenuListClassList}
          onClick={() => {
            this.burgerMenuClassListToggle();
          }}
        >
          <ul>
            <li
              onClick={() => {
                this.showCollection("now_playing");
              }}
            >
              Now playing
            </li>
            <li
              onClick={() => {
                this.showCollection("popular");
              }}
            >
              Popular
            </li>
            <li
              onClick={() => {
                this.showCollection("upcoming");
              }}
            >
              Upcoming
            </li>
            <li
              onClick={() => {
                this.showCollection("top_rated");
              }}
            >
              Top rated
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({ movies: state.movies }),
  { moviesListAction }
)(SearchBar);
