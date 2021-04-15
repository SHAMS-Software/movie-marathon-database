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
        { path: "description", label: "Description" },
        { path: "runtime", label: "Runtime" },
        { path: "director", label: "Director" },
        { path: "studio", label: "Studio" },
        { path: "rating", label: "Rating" },
        { path: "watch", label: "Where to Watch" }
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

    getModifiedData = () => {
        const { movies } = this.props;
        const { sortColumn } = this.state;
        const sortedMovies = _.orderBy(movies, [sortColumn.path], [sortColumn.order]);
        return sortedMovies;
    }

    createKey = (movie, column) => {
        return movie.id + column.path;
    }


    render() {
        const movies = this.getModifiedData();

        return (
            <Table className="bg-light table table-striped">
                <thead>
                    <tr>{this.columns.map((column) => (
                        <th className="clickable"
                        key={column.path}
                        onClick={() => this.handleSort(column.path)}
                        >
                            {column.label} {this.renderSortIcon(column)}
                        </th>
                    ))}</tr>
                </thead>
                <tbody>
                    {movies.map((movie) => (
                        <tr key={movie.id}>
                            {this.columns.map((column) => (
                                <td key={this.createKey(movie, column)}>
                                    {_.get(movie, column.path)}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Table>
        );
    }
}

export default MovieTable;
