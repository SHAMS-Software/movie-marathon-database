import React, { Component } from "react";
import { getMovies } from "../services/movieService.js"
import MovieTable from "./movieTable"

class Movies extends Component {
    state = {
        movies: getMovies(),
        sortColumn: {
            path: "title",
            order: "asc",
        },
    };
    
    
    render() {
        const { movies, sortColumn } = this.state;

        return (    
            <React.Fragment>
                <MovieTable
                movies={movies}
                sortColumn={sortColumn}>
                </MovieTable>
            </React.Fragment>
        );
    }
};

export default Movies;
