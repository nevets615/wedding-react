import React, { Component } from "react";
import axios from "axios";
import img from "../components/img/IMG_2935[196].jpg";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  componentDidMount() {}
  handleRegister = e => {
    e.preventDefault();
    axios
      .post("https://shielded-anchorage-68840.herokuapp.com/register", {
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
        console.log(res.status);
        this.props.history.push("/login");
      })
      .catch(err => console.log(err));
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <h4>Please Register before login</h4>
        <form onSubmit={this.handleRegister}>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            placeholder="Username..."
          />

          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="Password..."
          />
          <button onSubmit={this.handleRegister}>Register</button>
        </form>
        <h4>
          Make sure you login after registering to complete RSVP information
          form
        </h4>
        <img src={img} alt="logo" />
      </div>
    );
  }
}

export default Register;
