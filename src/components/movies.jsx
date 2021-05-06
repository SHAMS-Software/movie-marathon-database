import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieTable from "./movieTable"
import MovieFilters from "./movieFilters"

class Movies extends Component {
    state = {
        sortColumn: {
            path: "title",
            order: "asc",
        }
    };

    render() {
        const { sortColumn } = this.state;
        const { searchTerm, admin, movies, filters, handleChange, handleRemove, handleModify } = this.props;

        return (    
            <Container fluid>
                <Row>
                    <Col xs={2}>
                        <div className="py-4 px-2 bg-light rounded">
                            <MovieFilters 
                            filters={filters} 
                            onChange={handleChange}>
                            </MovieFilters>
                        </div>
                    </Col>
                    <Col xs={10}>
                        <div className="p-2 bg-light rounded">
                            <MovieTable
                            movies={movies}
                            sortColumn={sortColumn}
                            searchTerm={searchTerm}
                            admin={admin}
                            handleRemove={(movie) => handleRemove(movie)}
                            handleModify={(movie) => handleModify(movie)}>
                            </MovieTable>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
};

export default Movies;
