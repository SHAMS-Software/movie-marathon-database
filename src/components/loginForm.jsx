import React, { useState } from "react";
import {Link, useHistory} from "react-router-dom";
import {Form, Button} from "react-bootstrap"
import { getUserByEmail } from "../services/userService.js"

export default function LoginForm({doLogin, username}) {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState(false);
    const errorMessage = "Invalid Username and/or Password!";

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }
    
    function handleSubmit(event) {
        event.preventDefault();

        const user = getUserByEmail(email);
        
        if (typeof user !== undefined) {
            if (user.email === email && user.password === password) {
                setErrors(false);
                doLogin(user);
                history.push('/home');
            } else {
                setErrors(true);
            }
        } else {
            setErrors(true);
        }
    }

    return (
        <div>
            <div class="h-100 d-flex justify-content-center align-items-center bg-dark">
                <div class="bg-white rounded p-4">
                    <h2 id="sign-in-header"><center>Login</center></h2>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="m-2">
                            <Form.Label>Email</Form.Label>
                            <Form.Control autoFocus type="email" 
                            value={email} onChange={(e) => setEmail(e.target.value)}>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="m-2">
                            <Form.Label>Password</Form.Label>
                            <Form.Control autoFocus type="password" 
                            value={password} onChange={(e) => setPassword(e.target.value)}>
                            </Form.Control>
                        </Form.Group>
                        <center>{errors ? errorMessage : ""}</center>
                        <center>
                            <Button className="m-2" block size="lg" type="submit" disabled={!validateForm()}>
                                Login
                            </Button> 
                        </center>
                    </Form>
                    <div className="m-2">
                        <center className="m-2">
                            <div>Don't have an account yet?</div>
                            <Link className="link" to="/register">
                                Sign Up
                            </Link>
                        </center>
                        <center className="m-2">
                            <div>Forgot Password?</div>
                            <Link className="link" to="/forgot">
                                Click Here
                            </Link>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    );
};
