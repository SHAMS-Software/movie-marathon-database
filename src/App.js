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
        },
        searchTerm: ""
    };

    doLogin = (currentUser) => {
        this.setState({ loggedIn: true, user: currentUser })
    }

    handleSearch = (term) => {
        this.setState({searchTerm: term});
        console.log(term);
    }

    render() {
        return (
            <React.Fragment>
                <NavBar loggedIn={this.state.loggedIn} username={this.state.user.username} onSubmit={(term) => this.handleSearch(term)}/>
                <main className="container-fluid">
                    <Switch>
                        <Route 
                            path="/home" 
                            render={(props) =>  (
                                <Movies {...props} searchTerm={this.state.searchTerm}></Movies>
                            )} 
                        />
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
