import React from "react";
import { Link, NavLink } from "react-router-dom";
//import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap";

const Navbar = ({loggedIn, username}) => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <NavLink className="navbar-brand" to="/home">
                    Movie Marathon Database
                </NavLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLink className="nav-link" to="/home">
                            Home
                        </NavLink>
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <button class="m-2 btn btn-outline-primary" type="submit">
                        <Link className="link" to="/login">
                            { loggedIn ? username : "Login"}
                        </Link>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
