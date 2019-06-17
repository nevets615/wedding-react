import React from "react";
import "../Guest.css";

function Guest(props) {
  const {
    names,
    email,
    phone_number,
    number_of_guests,
    number_of_rooms,
    dates_staying,
    id
  } = props.guest;
  
  return (
    <div>
      <div className="guest-wrap" key={id}>
        <h4>name: {names}</h4>
        <h4>email: {email}</h4>
        <h4>phonenumber: {phone_number}</h4>
        <h4>number of guests: {number_of_guests}</h4>
        <h4>number of rooms: {number_of_rooms}</h4>
        <h4>dates staying: {dates_staying}</h4>
        <p onClick={() => props.deleteGuest(id)}>Delete</p>
      </div>
    </div>
  );
}

export default Guest;
