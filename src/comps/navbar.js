import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";

export default function Navbar() {
    return (<nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
    <div class="container">
      <Link to="/" className="nav-link">
        <img src={logo} alt="logo"></img>
      </Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <Link to="/login" className="nav-link">Log In</Link>
          </li>
          <li class="nav-item">
            <Link to="/signup" className="nav-link">Sign Up</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>)
}


