import React from "react";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  let id = null;
  if (localStorage.getItem("id")) {
    id = localStorage.getItem("id");
  }
  const logout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("authorization");
    window.location.reload();
  };
  return (
    <div className="nav">
      {!id ? (
        <>
          <div className="nav">
            <NavLink exact to="/login" activeClassName="activeNavButton">
              Login
            </NavLink>
          </div>
          <div>
            <NavLink exact to="/register" activeClassName="activeNavButton">
              Register
            </NavLink>
          </div>
        </>
      ) : (
        <div onClick={() => logout()} href="#" className="activeNavButton">
          Logout
        </div>
      )}
      <div>
        <a href="https://stevenandkayla-wedding.stevenrjefferson.com/">Home</a>
      </div>
      <div>
        <a href="https://blissful-ramanujan-3a2e3f.netlify.com/">Admin</a>
      </div>
    </div>
  );
};

export default Navbar;
