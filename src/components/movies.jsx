import React from "react";
//import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap";

const Movies = () => {
    return (    
        <table class="bg-light table table-striped">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Release Date</th>
                <th scope="col">Description</th>
                <th scope="col">Runtime</th>
                <th scope="col">Director</th>
                <th scope="col">Studio</th>
                <th scope="col">Rating</th>
                <th scope="col">Where to Watch</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>title</td>
                <td>date</td>
                <td>desc</td>
                <td>1:00:00</td>
                <td>dir</td>
                <td>studio</td>
                <td>5.0/5.0</td>
                <td>Netflix</td>
                </tr>
                <tr>
                <th scope="row">1</th>
                <td>title</td>
                <td>date</td>
                <td>desc</td>
                <td>1:00:00</td>
                <td>dir</td>
                <td>studio</td>
                <td>5.0/5.0</td>
                <td>Netflix</td>
                </tr>
            </tbody>
        </table>
    );
};

export default Movies;
