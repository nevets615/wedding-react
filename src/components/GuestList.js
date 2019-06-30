import React from "react";
import axios from "axios";
import Guest from "./Guest";
import img from "../components/img/IMG_2935[196].jpg";
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
    const token = localStorage.getItem("authorization");
    if (localStorage.getItem("id")) {
      const id = localStorage.getItem("id");
      this.setState({ loggedIn: true });
      axios
        .get(`https://shielded-anchorage-68840.herokuapp.com/guests`, {
          headers: { Authorization: token }
        })
        .then(res => {
          console.log(res.data);
          const guests = res.data.filter(item => item.user_id === id * 1)
          this.setState({ guests: guests });
          console.log(this.state);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
  toggler = () => {
    this.setState({ toggler: !this.state.toggler });
  };
  deleteGuest = id => {
    const token = localStorage.getItem("authorization");
    axios
      .delete(`https://shielded-anchorage-68840.herokuapp.com/deleteguest/${id}`, {
        headers: { Authorization: token }
      })
      .then(res => {
        console.log(res.status);
        this.setState({ toggler: !this.state.toggler });
        window.location.reload();
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
          <div>
          <h3>Please Register and Log In</h3>
          <img src={img} alt="logo" />
          </div>
        )}
      </div>
    );
  }
}

export default GuestList;
