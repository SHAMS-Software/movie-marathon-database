import _ from "lodash";
import React, { Component } from "react";
import { getMovies } from "../services/movieService.js"
import MovieTable from "./movieTable"
import MovieFilters from "./movieFilters"

class Movies extends Component {
    state = {
        movies: getMovies(),
        sortColumn: {
            path: "title",
            order: "asc",
        },
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
    
    handleChange = (name, movieFilters) => {
        const filters = movieFilters;
        this.setState({filters});
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

    getFilteredData = () => {
        const { movies } = this.state;
        const filteredMovies = this.filterData(movies);

        return filteredMovies;
    }

    render() {
        const { sortColumn, filters } = this.state;
        const { searchTerm } = this.props;
        const movies = this.getFilteredData();

        return (    
            <React.Fragment>
                <MovieFilters filters={filters} onChange={(name, movieFilters) => this.handleChange(name, movieFilters)}>
                </MovieFilters>
                <MovieTable
                movies={movies}
                sortColumn={sortColumn}
                searchTerm={searchTerm}>
                </MovieTable>
            </React.Fragment>
        );
    }
};

export default Movies;
