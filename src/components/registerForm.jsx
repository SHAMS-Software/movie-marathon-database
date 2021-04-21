import React, { useState } from "react";
import {Form, Button} from "react-bootstrap"
import {Link, useHistory} from "react-router-dom"
import { getUserByEmail, addUser } from "../services/userService.js"

export default function RegisterForm() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [emailError, setEmailError] = useState(false);
    //const [pwError, setPWError] = useState(false);
    const emailErrorMessage = "An account for this email already exists!";
    //const pwErrorMessage = "Passwords must match!";

    function validateForm() {
        return email.length > 0 && username.length > 0 && 
        password.length > 0 && confPassword.length > 0 &&
        password === confPassword;
    }
    
    function handleSubmit(event) {
        event.preventDefault();

        const user = getUserByEmail(email);

        if (user === undefined) {
            setEmailError(false);
            addUser(username, password, email);
            history.push('/login')
        } else {
            setEmailError(true);
        }
    }

    return (
            <div class="h-100 d-flex justify-content-center align-items-center bg-dark">
                <div class="bg-white rounded p-4">
                    <h2 id="sign-in-header"><center>Create Account</center></h2>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="m-2">
                            <Form.Label>Email</Form.Label>
                            <Form.Control autoFocus type="email" 
                            value={email} onChange={(e) => setEmail(e.target.value)}>
                            </Form.Control>
                        </Form.Group>
                        <center>{emailError ? emailErrorMessage : ""}</center>
                        <Form.Group className="m-2">
                            <Form.Label>Username</Form.Label>
                            <Form.Control autoFocus type="username" 
                            value={username} onChange={(e) => setUsername(e.target.value)}>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="m-2">
                            <Form.Label>Password</Form.Label>
                            <Form.Control autoFocus type="password" 
                            value={password} onChange={(e) => setPassword(e.target.value)}>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="m-2">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control autoFocus type="password" 
                            value={confPassword} onChange={(e) => setConfPassword(e.target.value)}>
                            </Form.Control>
                        </Form.Group>
                        <center>
                            <Button className="m-2" block size="lg" type="submit" disabled={!validateForm()}>
                                Register
                            </Button>
                        </center>
                    </Form>
                    <div className="m-2">
                        <center className="m-2">
                            <div>Already have an account?</div>
                            <Link className="link" to="/login">
                                Log In
                            </Link>
                        </center>
                    </div>
                </div>
            </div>
    );
};