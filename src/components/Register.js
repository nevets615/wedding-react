import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			name: '',
			email: ''
		};
	}
	componentDidMount() {}
	handleRegister = (e) => {
		e.preventDefault();
		axios
			.post('https://wedding-backend.herokuapp.com/auth/register', {
				username: this.state.username,
				password: this.state.password,
				name: this.state.name,
				email: this.state.email
			})
			.then((res) => {
				console.log(res.status);
				this.props.history.push('/login');
			})
			.catch((err) => console.log(err));
	};
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	render() {
		return (
			<form onSubmit={this.handleRegister}>
				<input
					type="text"
					name="username"
					value={this.state.username}
					onChange={this.handleChange}
					placeholder="Username..."
				/>
				<input
					type="text"
					name="name"
					value={this.state.name}
					onChange={this.handleChange}
					placeholder="Name..."
				/>
				<input
					type="text"
					name="email"
					value={this.state.email}
					onChange={this.handleChange}
					placeholder="Email..."
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
		);
	}
}

export default Register;