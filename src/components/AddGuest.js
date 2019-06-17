import React from "react";
import axios from "axios";

class AddGuest extends React.Component {
  constructor(props) {
    super();
    this.state = {
      names: "",
      email: "",
      phone_number: "",
      number_of_guests: "",
      number_of_rooms: "",
      dates_staying: ""
    };
  }
  addGuest = e => {
    const token = localStorage.getItem("authorization");
    console.log(token);
    const id = localStorage.getItem("id");
    e.preventDefault();

    axios
      .post(
        "https://shielded-anchorage-68840.herokuapp.com/addguest",
        {
          names: this.state.names,
          email: this.state.email,
          phone_number: this.state.phone_number,
          number_of_guests: this.state.number_of_guests,
          number_of_rooms: this.state.number_of_rooms,
          dates_staying: this.state.dates_staying,
          user_id: id
        },

        {
          headers: { Authorization: token }
        }
      )
      .then(res => {
        console.log(res.status, res.data);
        this.setState({
          names: "",
          email: "",
          phone_number: "",
          number_of_guests: "",
          number_of_rooms: "",
          dates_staying: ""
        });
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
      });
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="Forms">
        <h3>Add New Guest</h3>
        <h4>
          The name field shoud be the name as it appears on your invitation.
        </h4>
        <form onSubmit={this.addGuest}>
          <input
            type="text"
            name="names"
            value={this.state.names}
            onChange={this.handleChange}
            placeholder="name"
          />
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="email"
          />
          <input
            type="text"
            name="phone_number"
            value={this.state.phone_number}
            onChange={this.handleChange}
            placeholder="phone number"
          />
          <input
            type="text"
            name="number_of_guests"
            value={this.state.number_of_guests}
            onChange={this.handleChange}
            placeholder="number of guests"
          />
          <h4>
            We are blocking off rooms at a hotel for the occation. If you are
            intersted please indicate how many rooms you will need.
          </h4>
          <input
            type="text"
            name="number_of_rooms"
            value={this.state.number_of_rooms}
            onChange={this.handleChange}
            placeholder="number of rooms to save"
          />
          <h4>
            We will be arriving on the October 11th and leaving the morning of
            October 14th. Please indicate the dates you will be in town.
          </h4>
          <input
            type="text"
            name="dates_staying"
            value={this.state.dates_staying}
            onChange={this.handleChange}
            placeholder="dates staying"
          />

          <button onSubmit={this.addGuest}>Add new Guest</button>
        </form>
      </div>
    );
  }
}

export default AddGuest;
