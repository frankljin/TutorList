import React from "react";
import app from "./authenticate/base";

export function Home() {
    return (
    <div className="container">
        <br />
        Thank you for visiting! 
        <br />
        <br />
        <button className="btn btn-info" onClick={() => app.auth().signOut()}>Sign Out</button>
    </div>
    )};
