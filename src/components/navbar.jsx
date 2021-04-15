import React from "react";
import { Link, NavLink } from "react-router-dom";
//import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap";

const Navbar = ({loggedIn, username}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/home">
                    Movie Marathon Database
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLink className="nav-link" to="/home">
                            Home
                        </NavLink>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <button className="m-2 btn btn-outline-primary" type="submit">
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
