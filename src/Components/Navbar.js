import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  //Navbar menu here
  //Able to see login and register if not logged in
  //Can see search for player and saved players once logged in
  return (
  <div className="Navbar-container">
    <Link to="/">Register</Link>
    <Link to="/login">Log In</Link>
    <Link to="/playerlist">Players</Link>
  </div>
  );
};

export default Navbar;
