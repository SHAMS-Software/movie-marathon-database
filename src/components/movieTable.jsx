import React, { Component } from "react";
import Table from 'react-bootstrap/Table';
import _ from "lodash";
import { Form, Container, Row, Col, FormControl } from "react-bootstrap";
import NumericFilter from "./numericFilter";
import AlphabeticFilter from "./alphabeticFilter";

class MovieTable extends Component {
    state = {
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

    getFilteredData = (movies) => {
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

    getModifiedData = () => {
        const { movies } = this.props;
        const { sortColumn } = this.state;
        const sortedMovies = _.orderBy(movies, [sortColumn.path], [sortColumn.order]);
        const filteredMovies = this.getFilteredData(sortedMovies);

        return filteredMovies;
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

    handleChange = (name, filter) => {
        const filters = filter;
        this.setState({filters});
    }


    render() {
        const movies = this.getModifiedData();

        return (
            <React.Fragment>
                <Container fluid className="bg-light">
                    <Row>
                        <Col>
                            <NumericFilter name={"Release Date"} path={"releaseDate"} filters={this.state.filters}
                            onChange={(name, value) => this.handleChange(name, value)}>
                            </NumericFilter>
                        </Col>
                        <Col>
                            <NumericFilter name={"Runtime"} path={"runtime"} filters={this.state.filters}
                            onChange={(name, value) => this.handleChange(name, value)}>
                            </NumericFilter>
                        </Col>
                        <Col>
                            <NumericFilter name={"Score"} path={"score"} filters={this.state.filters}
                            onChange={(name, value) => this.handleChange(name, value)}>
                            </NumericFilter>
                        </Col>
                        <Col>
                            <AlphabeticFilter name={"Title"} path={"title"} filters={this.state.filters}
                            onChange={(name, value) => this.handleChange(name, value)}>
                            </AlphabeticFilter>
                        </Col>
                        <Col>
                            <AlphabeticFilter name={"Genre"} path={"genre"} filters={this.state.filters}
                            onChange={(name, value) => this.handleChange(name, value)}>
                            </AlphabeticFilter>
                        </Col>
                        <Col>
                            <AlphabeticFilter name={"Description"} path={"description"} filters={this.state.filters}
                            onChange={(name, value) => this.handleChange(name, value)}>
                            </AlphabeticFilter>
                        </Col>
                        <Col>
                            <AlphabeticFilter name={"Director"} path={"director"} filters={this.state.filters}
                            onChange={(name, value) => this.handleChange(name, value)}>
                            </AlphabeticFilter>
                        </Col>
                        <Col>
                            <AlphabeticFilter name={"Studio"} path={"studio"} filters={this.state.filters}
                            onChange={(name, value) => this.handleChange(name, value)}>
                            </AlphabeticFilter>
                        </Col>
                        <Col>
                            <AlphabeticFilter name={"Language"} path={"language"} filters={this.state.filters}
                            onChange={(name, value) => this.handleChange(name, value)}>
                            </AlphabeticFilter>
                        </Col>
                        <Col>
                            <AlphabeticFilter name={"Watch On"} path={"watch"} filters={this.state.filters}
                            onChange={(name, value) => this.handleChange(name, value)}>
                            </AlphabeticFilter>
                        </Col>
                    </Row>
                </Container>
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
                                        {this.renderItem(column.path, _.get(movie, column.path))}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </React.Fragment>
        );
    }
}

export default MovieTable;
