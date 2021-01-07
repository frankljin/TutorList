import React from "react";
import Navbar from "./comps/navbar";
import emailjs from "emailjs-com";
import "./styles/App.css";

export function About() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_y3zzzud', 'template_plml2gp', e.target, 'user_tpLkMnCE7Fw43pEZngASd')
            .then((result) => {
                console.log(result.text);
                alert("Thank you, the email has been recieved!");
            }, (error) => {
                console.log(error.text);
                alert("There has been an error in sending the email.");
            });
    }

    return (
        <div>
            <Navbar />
            <div className="container">
                <br />
                <h1>About TutorList</h1>
                <p>TutorList is a next-generation platform for high school students to seek for and provide help in an online setting.</p>
                <ul>
                    <li>Students may post ads targeting specific subjects and grades, filterable for easy searching</li>
                    <li>Tutors may view a personal "My Postings" page to manage postings (edit or delete)</li>
                    <li>Integration with Zoom allows for students to set up meetings easily with their tutor</li>
                    <li>A calendar allows students and tutors to keep track of upcoming meetings in an organized fashion</li>
                </ul>
                <p>Have any feature requests or general comments? Please fill out the form below:</p>
                <div className="card" id="contactcard"> 
                    <div className="card-body">
                        <form onSubmit={sendEmail}>
                            <div className="form-group">
                                <label>Name:</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Email address:</label>
                                <input type="email" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Message:</label>
                                <textarea className="form-control" rows="5"></textarea>
                            </div>
                            <button type="submit" className="btn btn-info">Submit</button>
                        </form>
                    </div>
                </div>
                <br />
                <p>Created by Frank Jin</p>
            </div>
        </div>
    )
}