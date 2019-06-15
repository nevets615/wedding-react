import React from "react";
import axios from "axios";
import Guest from "./Guests";

import AddGuest from "./AddGuest";

class GuestList extends React.Component {
  constructor() {
    super();
    this.state = {
      guests: [],
      loggedIn: false,
      toggler: true
    };
  }
  componentDidMount() {
    axios
      .get(`https://shielded-anchorage-68840.herokuapp.com/guests`)
      .then(res => {
        console.log(res.data);
        this.setState({ guests: res.data });
        console.log(this.state);
      })
      .catch(err => {
        console.log(err);
      });
  }
  toggler = () => {
    this.setState({ toggler: !this.state.toggler });
  };
  deleteGuest = id => {
    axios
      .delete(`https://shielded-anchorage-68840.herokuapp.com/guests/${id}`)
      .then(res => {
        console.log(res.status);
        this.setState({ toggler: !this.state.toggler });
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="GuestForm">
        {this.state.loggedIn ? (
          <>
            <AddGuest toggler={this.toggler} />
            <div className="GuestList">
              {this.state.guests.map(guest => (
                <Guest
                  deleteGuest={this.deleteGuest}
                  key={guest.id}
                  guest={guest}
                />
              ))}
            </div>
          </>
        ) : (
          <h3>Please Register and Log In</h3>
        )}
      </div>
    );
  }
}

export default GuestList;
