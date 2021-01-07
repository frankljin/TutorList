import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import app from "../authenticate/base";

export default function NavbarAuth() {
    return (<nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
    <div class="container">
      <div className="nav-link">
        <img src={logo} alt="logo"></img>
      </div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <Link to="/" className="nav-link" onClick={() => app.auth().signOut()}>Log Out</Link>
          </li>
          <li class="nav-item">
            <Link to="/calendar" className="nav-link">Calendar</Link>
          </li>
          <li class="nav-item">
            <Link to="/meeting" className="nav-link">Meeting</Link>
          </li>
          <li class="nav-item">
            <Link to="/create" className="nav-link">Make Posting</Link>
          </li>
          <li class="nav-item">
            <Link to="/postings" className="nav-link">View Postings</Link>
          </li>
          <li class="nav-item">
            <Link to="/mypostings" className="nav-link">My Postings</Link>
          </li>         
        </ul>
      </div>
    </div>
  </nav>)
}


