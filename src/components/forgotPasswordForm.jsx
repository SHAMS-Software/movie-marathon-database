import React, { Component } from "react";
import {Link} from "react-router-dom"

class ForgotPasswordForm extends Component {
    render() {
        return (
            <div>
                <div class="h-100 d-flex justify-content-center align-items-center bg-dark">
                <div class="bg-white rounded p-4">
                    <form class="d-flex flex-column align-items-center" id="create-account-form">
                    <h2 id="sign-in-header">Forgot Password</h2>
                    <div class="d-flex flex-column form-group m-2">
                        <label for="email-field">Username</label>
                        <input class="login-form-field form-control" type="email" name="email" id="email-field" placeholder="Enter Your Username"></input>
                    </div>
                    <div class="d-flex flex-column form-group m-2">
                        <label for="email-field">Security Question #1</label>
                        <input class="login-form-field form-control" type="email" name="email" id="email-field" placeholder="Response"></input>
                    </div>
                    <div class="d-flex flex-column form-group m-2">
                        <label for="email-field">Security Question #2</label>
                        <input class="login-form-field form-control" type="email" name="email" id="email-field" placeholder="Response"></input>
                    </div>
                    <div class="d-flex flex-column form-group m-2">
                        <label for="email-field">Security Question #3</label>
                        <input class="login-form-field form-control" type="email" name="email" id="email-field" placeholder="Response"></input>
                    </div>
                    <button type="button" class="btn btn-primary m-4" id="sign-in-form-submit">Submit</button>
                    <div class="d-flex align-items-center flex-column form-group m-2">
                        <center>
                            <Link className="link" to="/login">
                                Already have an account? Log In
                            </Link>
                        </center>
                        <center>
                            <Link className="link" to="/register">
                            Don't have an account yet? Sign Up
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

export default ForgotPasswordForm;