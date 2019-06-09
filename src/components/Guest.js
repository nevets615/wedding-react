import React from "react";
import "./Guest.css";

function Guest(props) {
  const { title, url, id, type } = props.guest;
  return (
    <div>
      <div className="guest-wrap" key={id}>
        <h3>{title}</h3>
        <a href={url}>Read</a>
        <p onClick={() => props.deleteGuest(id)}>Delete</p>
      </div>
    </div>
  );
}

export default Guest;
