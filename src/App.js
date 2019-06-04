import "./App.css";
import React, { Component } from "react";
import GuestList from "./components/GuestList";
import { Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import NavBar from "./components/NavBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      guests: []
    };
  }
  componentDidMount() {
    if (localStorage.getItem("authorization")) {
      this.setState({ loggedIn: true });
    }
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="header">
          <h1>RSVP Here</h1>
        </div>
        {/* <Route path="/login" component={Login} />
        <Route path="/register" render={props => <Register {...props} />} /> */}
        <Route
          exact
          path="/"
          render={() => <GuestList guests={this.state.guests} />}
        />
      </div>
    );
  }
}

export default App;
