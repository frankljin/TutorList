import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./base";
import { Link } from "react-router-dom";
import Navbar from "../comps/navbar";

const Signup = ({ history }) => {
    const handleSignup = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/postings");
        } catch (error) {
            alert(error);
        }
    }, [history]);
    return (
        <div>
            <Navbar />
            <div class="container">
                <br></br>
                <br></br>
                <div id="signup-row" class="row justify-content-center align-items-center">
                    <div id="signup-column" class="col-md-6">
                        <div id="signup-box" class="col-md-12">
                            <form onSubmit={handleSignup}>
                                <h3 class="text-center text-info">Sign Up for TutorList</h3>
                                <div class="form-group">
                                    <label for="username" class="text-info">Email:</label>
                                    <input name="email" type="email" class="form-control"></input>
                                </div>
                                <div class="form-group">
                                    <label for="password" class="text-info">Password:</label>
                                    <input name="password" type="password" class="form-control"></input>
                                </div>
                                <div><p>Your password must be at least 6 characters long.</p></div>
                                <div class="form-group">
                                    <input type="submit" name="submit" class="btn btn-info btn-md" value="Sign Up"></input>
                                </div>
                                <div id="login-link" class="text-right">
                                    <Link to="/login" className="nav-link text-info">Already have an account? Log in here</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default withRouter(Signup);


