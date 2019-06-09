import React from "react";
import axios from "axios";
import GuestList from "./GuestList";
// import "./Guest.css";
import AddGuest from "./AddGuest";

class GuestForm extends React.Component {
  constructor() {
    super();
    this.state = {
      guests: []
    };
  }
  componentDidMount() {
    // const {id} = this.props.match.params;
    axios
      .get(`https://shielded-anchorage-68840.herokuapp.com/guests/`)
      .then(res => {
        console.log(res.data);
        this.setState({ guests: res.data });
        console.log(this.state);
      })
      .catch(err => {
        console.log(err);
      });
  }

  deleteguest = id => {
    axios
      .delete(`https://shielded-anchorage-68840.herokuapp.com/guests/${id}`)
	  .then(res => {
		console.log(res.status)
		this.setState({ guests: res.data });
	  })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="guestForm">
        <AddGuest />
        <div className="guestList">
          {this.state.guests.map(guest => (
            <GuestList
              deleteguest={this.deleteguest}
              key={guest.id}
              guest={guest}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default GuestForm;