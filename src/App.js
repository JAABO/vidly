import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Customers from "./components/customers";
import LoginForm from "./components/loginForm";
import Movies from "./components/movies";
import MovieForm from "./components/movieForm";
import NavBar from "./components/navbar";
import NotFound from "./components/notFound";
import Rentals from "./components/rentals";

import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
