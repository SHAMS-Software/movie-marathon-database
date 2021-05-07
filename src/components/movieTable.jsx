import React, { Component } from "react";
import Table from 'react-bootstrap/Table';
import _ from "lodash";

class MovieTable extends Component {
    state = {
        sortColumn: {
            path: "title",
            order: "asc",
        }
    }

    columns = [
        { path: "title",label: "Title" },
        { path: "releaseDate", label: "Release Date" },
        { path: "genre", label: "Genre" },
        { path: "description", label: "Description" },
        { path: "score", label: "Score" },
        { path: "runtime", label: "Runtime" },
        { path: "director", label: "Director" },
        { path: "studio", label: "Studio" },
        { path: "rating", label: "Rating" },
        { path: "language", label: "Language" },
        { path: "watch", label: "Watch On" }
    ];

    // This method renders an up or down arrow on the column that
    // is currently being used for sorting.
    renderSortIcon = (column) => {
        const { sortColumn } = this.state;
        if (column.path !== sortColumn.path) return null;
        if (sortColumn.order === "asc")
            return <i>^</i>;
        return <i>v</i>;
    };

    handleSort = (path) => {
        const sortColumn = this.state.sortColumn;

        if (sortColumn.path === path) {
            sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc" 
        } else {
            sortColumn.path = path;
            sortColumn.order = "asc";
        }

        this.setState({ sortColumn });
    }

    getSearchedData = (movies) => {
        const term = this.props.searchTerm;

        const searchedMovies = movies.filter(o =>
            Object.keys(o).some(k => o[k].toString().toUpperCase().includes(term.toUpperCase())));

        return searchedMovies;
    }

    getModifiedData = () => {
        const { movies, searchTerm } = this.props;
        const { sortColumn } = this.state;
        const sortedMovies = _.orderBy(movies, [sortColumn.path], [sortColumn.order]);
        if (searchTerm.length > 0) {
            const searchedMovies = this.getSearchedData(sortedMovies);
            return searchedMovies;
        }

        return sortedMovies;
    }

    createKey = (movie, column) => {
        return movie.id + column.path;
    }

    renderItem = (path, item) => {
        if (path === "runtime") {
            return item + " Minutes";
        } else if (path === "score") {
            return item + "/10"
        }
        
        return item;
    }

    renderAdminHeader = () => {
        const admin = this.props.admin;
        if (admin) {
            return(
                <React.Fragment>
                    <th>
                        Modify Movie
                    </th>
                    <th>
                        Remove Movie
                    </th>
                </React.Fragment>
            )
        }
    }

    onRemove = () => {
        

    }

    renderAdminBody = (movie) => {
        const admin = this.props.admin;
        const { handleModify, handleRemove } = this.props;
        if (admin) {
            return (
                <React.Fragment>
                    <td>
                        <center>
                            <button type="button" 
                            class="btn btn-success" 
                            onClick={() => handleModify(movie)}>
                                ~
                            </button>
                        </center>
                    </td>
                    <td>
                        <center>
                            <button type="button" 
                            class="btn btn-danger"
                            onClick={() => handleRemove(movie)}>
                                x
                            </button>
                        </center>
                    </td>
                </React.Fragment> 
            )
        } else {
            return;
        }
    }

    render() {
        const movies = this.getModifiedData();

        return (
            <Table className="bg-light table table-striped">
                <thead>
                    <tr>
                        {this.columns.map((column) => (
                            <th className="clickable"
                            key={column.path}
                            onClick={() => this.handleSort(column.path)}
                            >
                                {column.label} {this.renderSortIcon(column)}
                            </th>
                        ))}
                        {this.renderAdminHeader()}
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie) => (
                        <tr key={movie.id}>
                            {this.columns.map((column) => (
                                <td key={this.createKey(movie, column)}>
                                    {this.renderItem(column.path, _.get(movie, column.path))}
                                </td>
                            ))}
                            {this.renderAdminBody(movie)}
                        </tr>
                    ))}
                </tbody>
            </Table>
        );
    }
}

export default MovieTable;
