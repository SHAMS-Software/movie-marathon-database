import React, { Component } from "react";

import { Form, Container, Row, Col, FormControl } from "react-bootstrap";

import AlphabeticFilter from "./alphabeticFilter";
import NumericFilter from "./numericFilter";


class MovieFilters extends Component {
    state = {
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

    handleChange = (name, filter) => {
        const filters = filter;
        this.setState({filters});
    }

    render() {
        return(
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
        )}
}

export default MovieFilters;