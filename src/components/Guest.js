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
        <h3>{names}</h3>
        <h3>{email}</h3>
        <h3>{phone_number}</h3>
        <h3>{number_of_guests}</h3>
        <h3>{number_of_rooms}</h3>
        <h3>{dates_staying}</h3>
        <p onClick={() => props.deleteGuest(id)}>Delete</p>
      </div>
    </div>
  );
}

export default Guest;
