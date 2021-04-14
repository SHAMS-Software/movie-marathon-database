import React, { Component } from "react";
import {Link} from "react-router-dom"

class RegisterForm extends Component {
    render() {
        return (
            <div>
                <div class="h-100 d-flex justify-content-center align-items-center bg-dark">
                    <div class="bg-white rounded p-4">

                    <form class="d-flex flex-column align-items-center" id="create-account-form">

                        <h2 id="sign-in-header">Create Account</h2>

                        <div class="d-flex flex-column form-group m-2">
                        <label for="email-field">Username</label>
                        <input class="login-form-field form-control" type="email" name="email" id="email-field" placeholder="Enter Your Username"></input>
                        </div>

                        <div class="d-flex flex-column form-group m-2">
                        <label for="password-field">Password</label>
                        <input class="login-form-field align-self-center form-control" type="password" name="password" id="password-field"  placeholder="Enter Your Password"></input>
                        </div>

                        <div class="d-flex flex-column form-group m-2">
                            <label for="password-field">Confirm Password</label>
                            <input class="login-form-field align-self-center form-control" type="password" name="password" id="password-field"  placeholder="Confirm Your Password"></input>
                            </div>

                            <button type="button" class="btn btn-primary m-4" id="sign-in-form-submit">Sign Up</button>
                            
                            <div class="d-flex align-items-center flex-column form-group m-2">
                                <center>
                                    <Link className="link" to="/login">
                                        Already have an account? Log In
                                    </Link>
                                </center>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
};

export default RegisterForm;