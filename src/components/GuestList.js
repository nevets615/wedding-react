import React from 'react';
import axios from 'axios';
import Guests from './Guests';

import AddGuest from './AddGuest';

class GuestList extends React.Component {
	constructor() {
		super();
		this.state = {
			Guests: [],
			loggedIn: false,
			toggler: true
		};
	}
	componentDidMount() {
		const token = localStorage.getItem('authorization');
		if (localStorage.getItem('id')) {
			const id = localStorage.getItem('id');
			this.setState({ loggedIn: true });
			axios
				.get(`https://shielded-anchorage-68840.herokuapp.com/users/${id}/Guests`, {
					headers: { authorization: token }
				})
				.then((res) => {
					console.log(res.data);
					this.setState({ Guests: res.data });
					console.log(this.state);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}
	toggler = () => {
		this.setState({toggler: !this.state.toggler})
	}
	deleteGuest = (id) => {
		const token = localStorage.getItem('authorization');
		axios
			.delete(`https://shielded-anchorage-68840.herokuapp.com/Guests/${id}`, {
				headers: { authorization: token }
			})
			.then((res) => {
				console.log(res.status);
				this.setState({ toggler: !this.state.toggler });
			})
			.catch((err) => {
				console.log(err);
			});
	};
	render() {
		return (
			<div className="GuestForm">
			{this.state.loggedIn ? (
				<>
					<AddGuest toggler={this.toggler}/>
					<div className="GuestList">
					{this.state.Guests.map((Guest) => (
						<Guest deleteGuest={this.deleteGuest} key={Guest.id} Guest={Guest} />))}
				</div>
				</>
			):(
        <h3>Please Log In to See Your Guests</h3>
			)}				
			</div>
		);
	}
}

export default GuestList;