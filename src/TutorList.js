import React from "react";
import "./styles/App.css";
import logo from "./logo.png";
import { Link, } from "react-router-dom";
import Navbar from "./comps/navbar";

export function TutorList() {
    return (
        <div id="pagecontent" className="text-center">
            <nav class="navbar navbar-expand-lg static-top">
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
                                <Link to="/about" className="nav-link text-white">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/login" className="nav-link text-white">Log In</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/signup" className="nav-link text-white">Sign Up</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <img className="vertical" id="mainlogo" src={logo} alt="logo" />
            <div class="typewriter">
                <h1 className="text-white">TutorList</h1>
            </div>
            
            <h4 className="text-white">Simplifying online learning</h4>
            <br></br>
            <button type="button" class="btn btn-info">
                <Link to="/about" className="nav-link text-white">Learn More</Link>
            </button>
        </div>
    )
};

