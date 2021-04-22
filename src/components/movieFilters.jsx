import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import AlphabeticFilter from "./alphabeticFilter";
import NumericFilter from "./numericFilter";

const MovieFilters = (props) => {
    return ( 
        <Container fluid className="bg-light">
            <Row>
                <Col>
                    <NumericFilter name={"Release Date"} path={"releaseDate"} filters={props.filters}
                    onChange={props.onChange}>
                    </NumericFilter>
                </Col>
                <Col>
                    <NumericFilter name={"Runtime"} path={"runtime"} filters={props.filters}
                    onChange={props.onChange}>
                    </NumericFilter>
                </Col>
                <Col>
                    <NumericFilter name={"Score"} path={"score"} filters={props.filters}
                    onChange={props.onChange}>
                    </NumericFilter>
                </Col>
                <Col>
                    <AlphabeticFilter name={"Title"} path={"title"} filters={props.filters}
                    onChange={props.onChange}>
                    </AlphabeticFilter>
                </Col>
                <Col>
                    <AlphabeticFilter name={"Genre"} path={"genre"} filters={props.filters}
                    onChange={props.onChange}>
                    </AlphabeticFilter>
                </Col>
                <Col>
                    <AlphabeticFilter name={"Description"} path={"description"} filters={props.filters}
                    onChange={props.onChange}>
                    </AlphabeticFilter>
                </Col>
                <Col>
                    <AlphabeticFilter name={"Director"} path={"director"} filters={props.filters}
                    onChange={props.onChange}>
                    </AlphabeticFilter>
                </Col>
                <Col>
                    <AlphabeticFilter name={"Studio"} path={"studio"} filters={props.filters}
                    onChange={props.onChange}>
                    </AlphabeticFilter>
                </Col>
                <Col>
                    <AlphabeticFilter name={"Language"} path={"language"} filters={props.filters}
                    onChange={props.onChange}>
                    </AlphabeticFilter>
                </Col>
                <Col>
                    <AlphabeticFilter name={"Watch On"} path={"watch"} filters={props.filters}
                    onChange={props.onChange}>
                    </AlphabeticFilter>
                </Col>
            </Row>
        </Container>
    );
}
 
export default MovieFilters;
