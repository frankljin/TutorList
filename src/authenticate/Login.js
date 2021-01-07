import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./base";
import { AuthContext } from "./Auth";
import { Link } from "react-router-dom";
import Navbar from "../comps/navbar";

const Login = ({ history }) => {
    const handleLogin = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await app
                .auth()
                .signInWithEmailAndPassword(email.value, password.value);
            history.push("/postings");
        } catch (error) {
            alert(error);
        }
    }, [history]);

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/postings" />;
    }

    return (
        <div>
            <Navbar />
            <div class="container">
                <br></br>
                <br></br>
                <div id="login-row" class="row justify-content-center align-items-center">
                    <div id="login-column" class="col-md-6">
                        <div id="login-box" class="col-md-12">
                            <form onSubmit={handleLogin}>
                                <h3 class="text-center text-info">Log In to TutorList</h3>
                                <div class="form-group">
                                    <label for="username" class="text-info">Email:</label>
                                    <input name="email" type="email" class="form-control"></input>
                                </div>
                                <div class="form-group">
                                    <label for="password" class="text-info">Password:</label>
                                    <input name="password" type="password" class="form-control"></input>
                                </div>
                                <div class="form-group">
                                    <input type="submit" name="submit" class="btn btn-info btn-md" value="Log In"></input>
                                </div>
                                <div id="register-link" class="text-right">
                                    <Link to="/signup" className="nav-link text-info">New to TutorList? Sign up here</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};


export default withRouter(Login);