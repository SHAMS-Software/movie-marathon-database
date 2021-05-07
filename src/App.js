import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import _ from "lodash";
import Movies from "./components/movies";
import NavBar from "./components/navbar";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import ForgotPasswordForm from "./components/forgotPasswordForm";
import AddMovieForm from "./components/addMovieForm"
import { getMovies } from "./services/movieService.js"
import "./App.css";

class App extends Component {
    state = {
        movies: [],
        requests: [],
        loggedIn: false,
        user: {
            username: "",
            password: "",
            email: "",
            admin: 0,
            moderator: 0
        },
        searchTerm: "",
        filters: {
            title: "",
            releaseDate: {
                min: 0,
                max: 10000
            },
            genre: "",
            description: "",
            score: {
                min: 0,
                max: 10000
            },
            runtime: {
                min: 0,
                max: 10000
            },
            director: "",
            studio: "",
            rating: "",
            language: "",
            watch: ""
        }
    };

    componentDidMount() {
        const movies = getMovies();
        this.setState({movies: movies});
    }

    filterData = (movies) => {
        const filters = this.state.filters;

        // Numeric Filters
        movies = _.filter(movies, function(m) {
            return (filters.releaseDate.min <= m.releaseDate && 
                filters.releaseDate.max >= m.releaseDate &&
                filters.runtime.min <= m.runtime &&
                filters.runtime.max >= m.runtime &&
                filters.score.min <= m.score &&
                filters.score.max >= m.score)
        })

        // Title Filter
        movies = _.filter(movies, function(m) {
            return (m.title.toUpperCase().includes(filters.title.toUpperCase()))
        })

        // Genre Filter
        movies = _.filter(movies, function(m) {
            return (m.genre.toUpperCase().includes(filters.genre.toUpperCase()))
        })

        // Description Filter
        movies = _.filter(movies, function(m) {
            return (m.description.toUpperCase().includes(filters.description.toUpperCase()))
        })

        // Director Filter
        movies = _.filter(movies, function(m) {
            return (m.director.toUpperCase().includes(filters.director.toUpperCase()))
        })

        // Studio Filter
        movies = _.filter(movies, function(m) {
            return (m.studio.toUpperCase().includes(filters.studio.toUpperCase()))
        })

        // Language Filter
        movies = _.filter(movies, function(m) {
            return (m.language.toUpperCase().includes(filters.language.toUpperCase()))
        })

        // Watch On Filter
        movies = _.filter(movies, function(m) {
            return (m.watch.toUpperCase().includes(filters.watch.toUpperCase()))
        })

        return movies;
    }

    addMovie = (movie) => {
        const user = this.state.user;

        if (user.admin) {
            const movies = this.state.movies;
            
            movies.push(movie);
            
            this.setState({ movies: movies })
        } else {
            const requests = this.state.requests;
            
            const request = {
                "username": user.username,
                "email": user.email,
                "movie": movie
            }

            requests.push(request);
            this.setState({requests: requests});
        }
    }

    removeMovie = (movie) => {
        const user = this.state.user;
        var movies = this.state.movies;

        if (user.admin) {
            movies = _.filter(movies, function(m) {
                return (m.id !== movie.id)
            })
            
            this.setState({movies: movies});
        }
    }

    modifyMovie = (movie) => {

    }

    getFilteredData = () => {
        const { movies } = this.state;
        const filteredMovies = this.filterData(movies);

        return filteredMovies;
    }

    doLogin = (currentUser) => {
        this.setState({ loggedIn: true, user: currentUser })
    }

    handleSearch = (term) => {
        this.setState({searchTerm: term});
    }

    handleFilter = (movieFilters) => {
        const filters = movieFilters;
        this.setState({filters});
    }

    render() {
        const movies = this.getFilteredData();
        return (
            <React.Fragment>
                <NavBar loggedIn={this.state.loggedIn} username={this.state.user.username} admin={this.state.user.admin} onSubmit={(term) => this.handleSearch(term)}/>
                <main className="container-fluid">
                    <Switch>
                        <Route 
                            path="/home" 
                            render={(props) =>  (
                                <Movies {...props} movies={movies} 
                                admin={this.state.user.admin} 
                                searchTerm={this.state.searchTerm} 
                                filters={this.state.filters}
                                handleChange={(movieFilters) => this.handleFilter(movieFilters)}
                                handleRemove={(movie) => this.removeMovie(movie)}
                                handleModify={(movie) => this.modifyMovie(movie)}></Movies>
                            )} 
                        />
                        <Route
                            path='/login'
                            render={(props) => (
                                <LoginForm {...props} doLogin={(currentUser) => this.doLogin(currentUser)}/>
                            )}
                        />
                        <Route path="/register" component={RegisterForm} />
                        <Route 
                            path="/add-movie" 
                            render={(props) => (
                                <AddMovieForm 
                                {...props} 
                                admin={this.state.user.admin} 
                                loggedIn={this.state.loggedIn}
                                onSubmit={(movie) => this.addMovie(movie)}/>
                            )}
                        />
                        <Route path="/forgot" component={ForgotPasswordForm} />
                        <Redirect from="/" to="/home" />
                        <Redirect to="/not-found" />
                    </Switch>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
