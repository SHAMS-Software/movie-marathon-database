import React, { useState } from "react";
import {Form, Button, Row, Col} from "react-bootstrap"
import {useHistory} from "react-router-dom"

export default function AddMovieForm({ admin, loggedIn, onSubmit }) {
    const history = useHistory();
    const [title, setTitle] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    const [genre, setGenre] = useState("");
    const [description, setDescription] = useState("");
    const [score, setScore] = useState("");
    const [runtime, setRuntime] = useState("");
    const [director, setDirector] = useState("");
    const [studio, setStudio] = useState("");
    const [rating, setRating] = useState("");
    const [language, setLanguage] = useState("");
    const [watchOn, setWatchOn] = useState("");

    function validateForm() {
        return (title.length > 0 && releaseDate.length > 0 && 
        genre.length > 0 && description.length > 0 && 
        score.length > 0 && runtime.length > 0 && 
        director.length > 0 && studio.length > 0 && 
        rating.length > 0 && language.length > 0 && watchOn.length > 0 &&
        loggedIn);
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        var movieInDb = {
            "image": "",
            "title": title,
            "releaseDate": releaseDate,
            "description": description,
            "runtime": runtime,
            "director": director,
            "studio": studio,
            "score": score,
            "watch": watchOn,
            "language": language,
            "genre": genre,
            "rating": rating,
            "id": ""
        }

        history.push('/home');

        onSubmit(movieInDb);
    }
    
    return (
            <div className="h-100 d-flex justify-content-center align-items-center bg-dark">
                <div className="bg-white rounded p-4">
                    <h2 id="add-movie-header">
                        <center>{admin ? "Add Movie" : "Request Movie" }</center>
                    </h2>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col>
                                <Form.Group className="m-2">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="title" 
                                    value={title} onChange={(e) => setTitle(e.target.value)}>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="m-2">
                                    <Form.Label>Release Date</Form.Label>
                                    <Form.Control type="release-date" 
                                    value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)}>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="m-2">
                                    <Form.Label>Genre</Form.Label>
                                    <Form.Control type="genre" 
                                    value={genre} onChange={(e) => setGenre(e.target.value)}>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="m-2">
                                    <Form.Label>Studio</Form.Label>
                                    <Form.Control type="studio" 
                                    value={studio} onChange={(e) => setStudio(e.target.value)}>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="m-2">
                                    <Form.Label>Rating</Form.Label>
                                    <Form.Control type="rating" 
                                    value={rating} onChange={(e) => setRating(e.target.value)}>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="m-2">
                                    <Form.Label>Score</Form.Label>
                                    <Form.Control type="score" 
                                    value={score} onChange={(e) => setScore(e.target.value)}>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="m-2">
                                    <Form.Label>Runtime</Form.Label>
                                    <Form.Control type="runtime" 
                                    value={runtime} onChange={(e) => setRuntime(e.target.value)}>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="m-2">
                                    <Form.Label>Director</Form.Label>
                                    <Form.Control type="director" 
                                    value={director} onChange={(e) => setDirector(e.target.value)}>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="m-2">
                                    <Form.Label>Language</Form.Label>
                                    <Form.Control type="language" 
                                    value={language} onChange={(e) => setLanguage(e.target.value)}>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="m-2">
                                    <Form.Label>Watch On</Form.Label>
                                    <Form.Control type="watch-on" 
                                    value={watchOn} onChange={(e) => setWatchOn(e.target.value)}>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="m-2">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="description" 
                            value={description} onChange={(e) => setDescription(e.target.value)}>
                            </Form.Control>
                        </Form.Group>
                        <center>
                            <Button className="m-2" block size="lg" type="submit" disabled={!validateForm()}>
                                Submit
                            </Button>
                        </center>
                    </Form>
                </div>
            </div>
    );
}