import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import AlphabeticFilter from "./alphabeticFilter";
import NumericFilter from "./numericFilter";

const MovieFilters = (props) => {
    return ( 
        <Container fluid className="bg-light">
            <Row>
                <Col>
                    <h3>Filters</h3>
                    <NumericFilter name={"Release Date"} path={"releaseDate"} filters={props.filters}
                    onChange={props.onChange}>
                    </NumericFilter>
                    <NumericFilter name={"Runtime"} path={"runtime"} filters={props.filters}
                    onChange={props.onChange}>
                    </NumericFilter>
                    <NumericFilter name={"Score"} path={"score"} filters={props.filters}
                    onChange={props.onChange}>
                    </NumericFilter>
                    <AlphabeticFilter name={"Title"} path={"title"} filters={props.filters}
                    onChange={props.onChange}>
                    </AlphabeticFilter>
                    <AlphabeticFilter name={"Genre"} path={"genre"} filters={props.filters}
                    onChange={props.onChange}>
                    </AlphabeticFilter>
                    <AlphabeticFilter name={"Description"} path={"description"} filters={props.filters}
                    onChange={props.onChange}>
                    </AlphabeticFilter>
                    <AlphabeticFilter name={"Director"} path={"director"} filters={props.filters}
                    onChange={props.onChange}>
                    </AlphabeticFilter>
                    <AlphabeticFilter name={"Studio"} path={"studio"} filters={props.filters}
                    onChange={props.onChange}>
                    </AlphabeticFilter>
                    <AlphabeticFilter name={"Language"} path={"language"} filters={props.filters}
                    onChange={props.onChange}>
                    </AlphabeticFilter>
                    <AlphabeticFilter name={"Watch On"} path={"watch"} filters={props.filters}
                    onChange={props.onChange}>
                    </AlphabeticFilter>
                </Col>
            </Row>
        </Container>
    );
}
 
export default MovieFilters;
