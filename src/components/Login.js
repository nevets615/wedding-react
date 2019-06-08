import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			userID: null
		};
	}
	componentDidMount() {
	}
	handleLogin = (e) => {
    e.preventDefault();
		axios
			.post('https://calm-mountain-32951.herokuapp.com/auth/login', {
				username: this.state.username,
				password: this.state.password
			})
			.then((res) =>{ 
				localStorage.setItem('authorization', res.data.token)
				localStorage.setItem('id', res.data.id)				
				console.log(res.status)
				this.props.history.push('/')
      })
			.catch((err) => {
				console.log(err);
			});
	};
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	render() {
		return (
			<form onSubmit={this.handleLogin}>
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
				<button onSubmit={this.handleLogin}>Login</button>
			</form>
		);
	}
}

export default Login;