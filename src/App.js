import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Movies from "./components/movies";
//import Customers from "./components/customers";
//import Rentals from "./components/rentals";
//import NotFound from "./components/notFound";
import NavBar from "./components/navbar";
//import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import ForgotPasswordForm from "./components/forgotPasswordForm";
import "./App.css";

class App extends Component {
    state = {
        loggedIn: false,
        user: {
            id: "",
            username: "",
            password: "",
            email: ""
        }
    };

    doLogin = (currentUser) => {
        this.setState({ loggedIn: true, user: currentUser })
    }

    render() {
        return (
            <React.Fragment>
                <NavBar loggedIn={this.state.loggedIn} username={this.state.user.username}/>
                <main className="container">
                    <Switch>
                        <Route path="/home" component={Movies} />
                        <Route
                            path='/login'
                            render={(props) => (
                                <LoginForm {...props} doLogin={(currentUser) => this.doLogin(currentUser)}/>
                            )}
                        />
                        <Route path="/register" component={RegisterForm} />
                        <Route path="/forgot" component={ForgotPasswordForm} />
                        <Redirect from="/" to="/home" />
                        <Redirect to="/not-found" />
                    </Switch>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
