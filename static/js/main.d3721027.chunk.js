(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/IMDB.8ba3391e.svg"},,,,,,,function(e,t,n){e.exports=n.p+"static/media/React.9a28da9f.svg"},function(e,t,n){e.exports=n.p+"static/media/TheMovieDB.02a9430b.svg"},,function(e,t,n){e.exports=n(36)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(9),s=n.n(r),c=(n(26),n(27),n(28),n(18)),o=n.n(c),l=n(19),u=n.n(l),m=n(11),h=n.n(m);function p(){return i.a.createElement("div",{className:"nav-container"},i.a.createElement("img",{src:o.a,width:"70px",alt:"React"}),i.a.createElement("img",{src:u.a,width:"70px",alt:"TheMovieDB"}),i.a.createElement("img",{src:h.a,width:"70px",alt:"IMDB"}))}var d=n(1),v=n(2),g=n(5),b=n(3),f=n(6),E=(n(29),"https://api.themoviedb.org/3"),C="?api_key=2973b5ea282e5fd4b5f250885f41a7a3",L=n(4),k=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(g.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(i)))).state={searchValue:"",moviesList:[],burgerMenuBtnClassList:"burgerMenu",burgerMenuListClassList:"burgerMenuList"},n}return Object(f.a)(t,e),Object(v.a)(t,[{key:"handleSearchInput",value:function(e){this.setState({searchValue:e})}},{key:"submitSearch",value:function(e){e&&this.props.moviesListAction("".concat(E,"/search/movie").concat(C,"&language=en-US&page=1&include_adult=false&query=").concat(e))}},{key:"showCollection",value:function(e){this.props.moviesListAction("".concat(E,"/movie/").concat(e).concat(C))}},{key:"burgerMenuClassListToggle",value:function(){"burgerMenu"===this.state.burgerMenuBtnClassList?this.setState({burgerMenuBtnClassList:"burgerMenu open"}):this.setState({burgerMenuBtnClassList:"burgerMenu"}),"burgerMenuList"===this.state.burgerMenuListClassList?this.setState({burgerMenuListClassList:"burgerMenuList open"}):this.setState({burgerMenuListClassList:"burgerMenuList"})}},{key:"enterPressHandler",value:function(e){13===e.charCode&&this.state.searchValue&&this.submitSearch(this.state.searchValue)}},{key:"componentDidMount",value:function(){this.enterPressHandler=this.enterPressHandler.bind(this),document.body.addEventListener("keypress",this.enterPressHandler)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"search-container"},i.a.createElement("h1",{className:"search-title"},"THE MOVIE DB"),i.a.createElement("div",{className:"searchbar-container"},i.a.createElement("input",{className:"searchbar",type:"text",placeholder:"Search films or tv series ...",onChange:function(t){return e.handleSearchInput(t.target.value)}}),i.a.createElement("button",{className:"btn search-btn",onClick:function(){e.submitSearch(e.state.searchValue)}},"SEARCH"),i.a.createElement("div",{className:this.state.burgerMenuBtnClassList,onClick:function(){e.burgerMenuClassListToggle()}},i.a.createElement("span",{className:"burger-line"}),i.a.createElement("span",{className:"burger-line"}),i.a.createElement("span",{className:"burger-line"}))),i.a.createElement("div",{className:"searchMenu-container"},i.a.createElement("button",{className:"btn searchMenu-btn",onClick:function(){e.showCollection("now_playing")}},"Now playing"),i.a.createElement("button",{className:"btn searchMenu-btn",onClick:function(){e.showCollection("popular")}},"Popular"),i.a.createElement("button",{className:"btn searchMenu-btn",onClick:function(){e.showCollection("upcoming")}},"Upcoming"),i.a.createElement("button",{className:"btn searchMenu-btn",onClick:function(){e.showCollection("top_rated")}},"Top rated")),i.a.createElement("div",{className:this.state.burgerMenuListClassList,onClick:function(){e.burgerMenuClassListToggle()}},i.a.createElement("ul",null,i.a.createElement("li",{onClick:function(){e.showCollection("now_playing")}},"Now playing"),i.a.createElement("li",{onClick:function(){e.showCollection("popular")}},"Popular"),i.a.createElement("li",{onClick:function(){e.showCollection("upcoming")}},"Upcoming"),i.a.createElement("li",{onClick:function(){e.showCollection("top_rated")}},"Top rated"))))}}]),t}(a.Component),y=Object(L.b)(function(e){return{movies:e.movies}},{moviesListAction:function(e){return{type:"SEARCH_FILM_COLLECTION",searchingFilmCollectionLink:e}}})(k),w=(n(34),function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(g.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(i)))).state={searchValue:"",moviesList:[]},n}return Object(f.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(E,"/movie/popular").concat(C)).then(function(e){return e.json()}).then(function(t){return e.setState({moviesList:t.results})}).catch(function(e){return console.log(e.message)})}},{key:"componentDidUpdate",value:function(){var e=this;this.props.searchValue.length>0&&this.props.searchValue!==this.state.searchValue&&(this.setState({searchValue:this.props.searchValue}),fetch(this.props.searchValue).then(function(e){return e.json()}).then(function(t){e.setState({moviesList:t.results})}).catch(function(e){return console.log(e.message)}))}},{key:"showModalWindow",value:function(e){this.props.showFilmDetailsAction("".concat(E,"/movie/").concat(e.name).concat(C,"&append_to_response=videos,images"))}},{key:"render",value:function(){var e=this,t=this.state.moviesList.map(function(t,n){return i.a.createElement("div",{key:n,className:"movie-card"},i.a.createElement("div",null,i.a.createElement("img",{width:"100%",src:"http://image.tmdb.org/t/p/w500"+t.poster_path,name:t.id,onClick:function(t){return e.showModalWindow(t.target)},alt:"movie poster",className:"moviePoster"})),i.a.createElement("div",{className:"titleAndRatingContainer"},i.a.createElement("div",null,i.a.createElement("h3",null,t.original_title)),i.a.createElement("div",{className:"RatingContainer"},i.a.createElement("p",null,"Rating: ",t.vote_average,"/10"),i.a.createElement("button",{type:"button",className:"showDetailsBtn",name:t.id,onClick:function(t){return e.showModalWindow(t.target)}},"Show details"))))});return i.a.createElement("div",{className:"movies-container-main"},t)}}]),t}(a.Component)),M=Object(L.b)(function(e){return{searchValue:e.searchValue}},{showFilmDetailsAction:function(e){return{type:"SEARCH_FILM_DETAILS",searchingFilmLink:e}}})(w),N=(n(35),function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(g.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(i)))).state={movie:"",searchingFilmLink:""},n}return Object(f.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.escapePressHandler=this.escapePressHandler.bind(this),document.body.addEventListener("keydown",this.escapePressHandler)}},{key:"componentDidUpdate",value:function(){var e=this;this.props.searchingFilmLink.length>0&&this.props.searchingFilmLink!==this.state.searchingFilmLink?(this.setState({searchingFilmLink:this.props.searchingFilmLink}),document.getElementById("root").style.position="fixed",fetch(this.props.searchingFilmLink).then(function(e){return e.json()}).then(function(t){e.setState({movie:t})}).catch(function(e){return console.log(e.message)})):document.getElementById("root").style.position=""}},{key:"genreConcat",value:function(){var e=[];return this.state.movie.genres.map(function(t){e.push(t.name)}),e.join(", ")}},{key:"hideCover",value:function(){document.body.removeChild(document.querySelector(".exitBtn")),document.querySelector(".root").style.position=""}},{key:"hideModalWindow",value:function(){this.props.hideFilmDetailsAction()}},{key:"escapePressHandler",value:function(e){27===e.keyCode&&this.hideModalWindow()}},{key:"render",value:function(){var e=this,t=this.state.movie;return i.a.createElement(i.a.Fragment,null,this.props.searchingFilmLink&&i.a.createElement("div",{className:"modalWindow"},i.a.createElement("div",{className:"coverDiv"}),i.a.createElement("div",{className:"upperCoverDiv"},i.a.createElement("div",{className:"MovieWrapper"},i.a.createElement("img",{width:"40%",alt:"movie poster",src:"http://image.tmdb.org/t/p/w500"+t.poster_path,className:"movie poster"}),i.a.createElement("div",{className:"movieDescription"},i.a.createElement("p",{className:"exitBtn",onClick:function(){return e.hideModalWindow()}},"[X]"),i.a.createElement("h2",null,t.title),i.a.createElement("p",null,t.overview),i.a.createElement("p",null,i.a.createElement("span",{className:"descriptionParam"},"IMDB Rating:"),i.a.createElement("span",null,t.vote_average)),t.genres&&i.a.createElement("p",null,i.a.createElement("span",{className:"descriptionParam"},"Genres:"),i.a.createElement("span",null,this.genreConcat())),i.a.createElement("p",null,i.a.createElement("span",{className:"descriptionParam"},"Release Date:"),i.a.createElement("span",null,t.release_date)),i.a.createElement("p",null,i.a.createElement("span",{className:"descriptionParam"},"Budget:"),i.a.createElement("span",null,"$ ".concat(t.budget/1e6," m."))),i.a.createElement("a",{className:"IMDb_button",target:"_blank",rel:"noopener noreferrer",href:"https://www.imdb.com/title/".concat(t.imdb_id,"/?ref_=nv_sr_1?ref_=nv_sr_1")},i.a.createElement("img",{src:h.a,width:"80px",alt:"movie poster"})))))))}}]),t}(a.Component)),_=Object(L.b)(function(e){return{searchingFilmLink:e.searchingFilmLink}},{hideFilmDetailsAction:function(e){return{type:"HIDE_FILM_DETAILS",searchingFilmLink:""}}})(N),O=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(g.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(i)))).el=document.createElement("div"),n}return Object(f.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){document.body.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){document.body.removeChild(this.el)}},{key:"render",value:function(){return s.a.createPortal(this.props.children,this.el)}}]),t}(a.Component);var j=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p,null),i.a.createElement(y,null),i.a.createElement(M,null),i.a.createElement(O,null,i.a.createElement(_,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S,D=n(7),F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.searchingFilmCollectionLink;switch(n){case"SEARCH_FILM_COLLECTION":return a;default:return e}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.searchingFilmLink;switch(n){case"SEARCH_FILM_DETAILS":case"HIDE_FILM_DETAILS":return a;default:return e}},A=Object(D.b)({searchValue:F,searchingFilmLink:I}),B=D.c,H=(S={},Object(D.d)(A,S,B()));s.a.render(i.a.createElement(L.a,{store:H},i.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[21,1,2]]]);
//# sourceMappingURL=main.d3721027.chunk.js.map