import "./App.css";
import React, { Component } from "react";
import Articles from "./components/ArticleList";
import { Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import NavBar from "./components/NavBar";
import splashbg from "./components/splashbg.png";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      pintreach: []
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
          <h1>Know whats going on in your field</h1>

          <img className="imgwave" src={splashbg} alt="Logo" />
        </div>
        <Route path="/login" component={Login} />
        <Route path="/register" render={props => <Register {...props} />} />
        <Route
          exact
          path="/"
          render={() => <Articles pintreach={this.state.pintreach} />}
        />
      </div>
    );
  }
}

export default App;
