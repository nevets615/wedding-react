import React from 'react';
import axios from 'axios';
import typeHelper from './typeHelper';

class AddGuest extends React.Component {
	constructor(props) {
		super();
		this.state = {
			type: '',
			title: '',
			url: ''
		};
	}
	addGuest = (e) => {
		const token = localStorage.getItem('authorization');
		const id = localStorage.getItem('id');
		e.preventDefault();
		axios
			.post(
				'https://wedding-backend.herokuapp.com/guests',
				{
					title: this.state.title,
					url: this.state.url,
					user_id: id,
					type: typeHelper(this.state.type)
				},
				{
					headers: { authorization: token }
				}
			)
			.then((res) => {
				console.log(res.status, res.data);
				this.props.toggler();
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
			<div className="Forms">
				<h3>Add New Guest</h3>
				<form onSubmit={this.addGuest}>
					<input
						type="text"
						name="title"
						value={this.state.title}
						onChange={this.handleChange}
						placeholder="title"
					/>
					<input
						type="text"
						name="url"
						value={this.state.url}
						onChange={this.handleChange}
						placeholder="url"
					/>
					<select
						onChange={this.handleChange}
						name="type"
						value={this.state.type}
						className="review__modal--form--rating"
					>
						<option defaultValue="medicine">medicine</option>
						<option value="physics">physics</option>
						<option value="biology">biology</option>
						<option value="economics">economics</option>
						<option value="chemistry">chemistry</option>
						<option value="environmental science">environmental science</option>
						<option value="computer science">computer science</option>
					</select>
					<button onClick={this.addGuest}>Add new Guest</button>
				</form>
			</div>
		);
	}
}

export default AddGuest;