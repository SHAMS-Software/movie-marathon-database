import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
export default function Search({onSubmit}) {
    const [term, setTerm] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        onSubmit(term);
    }

    return ( 
        <Form onSubmit={handleSubmit} className="d-flex">
                <Form.Control className="me-2" type="search"
                placeholder={"Type Something..."} value={term} onChange={(e) => setTerm(e.target.value)}>
                </Form.Control>
                <Button variant="outline-success" type="submit">Search</Button>
        </Form>
     );
}