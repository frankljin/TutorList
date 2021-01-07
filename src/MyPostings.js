import React, { useState, useEffect } from "react";
import NavbarAuth from "./comps/navbar-auth";
import { Link } from "react-router-dom";
import "./styles/App.css";
import firebase from "firebase";
import app from "./authenticate/base";
import { deletePost } from "./database";
import { ToEdit } from "./Edit";

export function MyPostings() {
    const [posts, setPosts] = useState();

    useEffect(() => {
        const postRef = firebase.database().ref("posts");
        postRef.on("value", (snapshot) => {
            const post = snapshot.val();
            const posts = [];
            for (let id in post) {
                posts.push(post[id]);
            }
            setPosts(posts);
        })
    }, [])

    /* This function retrieves Firebase generated key to perform delete operation  */
    /* This is not optimal (if date posted is exact to the millisecond) but it will have to do for now  */
    function getID(postdate) {
        const postRef = firebase.database().ref("posts");
        postRef.orderByChild('date').equalTo(`${postdate}`).on("value", function (snapshot) {
            snapshot.forEach((function (child) { deletePost(child.key) }))
        })
    }
    return (
        <div>
            <NavbarAuth />
            <div className="container">
                <br />
                <h1>My Postings</h1>
                <br />
                <div className="row">
                    <div className="col-sm-4 col-md-3">
                        <h5>Account Info</h5>
                        <div class="list-group">
                            <p className="list-group-item">Email: {app.auth().currentUser.email}</p>
                        </div>
                    </div>
                    <div class="container col row">
                        {posts ? posts.map((posting, index) => (
                            posting.poster === app.auth().currentUser.email) ?
                            <div class="card-deck col-sm-4">
                                <div className="card" >
                                    <div className="card-body">
                                        <h5 className="card-title">{posting.title}</h5>
                                        <p className="card-text">{posting.description}</p>
                                        <span class="badge badge-pill badge-danger">Grade {posting.grade}</span>
                                        <span class="badge badge-pill badge-primary">{posting.subject}</span>
                                        <p className="card-text"><small className="text-muted">{posting.poster}</small></p>
                                        <div className="btn-group">
                                            <button className="btn btn-link">
                                                
                                            {/* The function was being called automatically */}
                                            {/* when mapped, so I had to use an anonymous function */}
                                            </button>
                                                <form id="btnform" className="form-group" onSubmit={() => getID(posting.date)}>
                                            <button className="btn btn-link" type="submit" value="Delete">Delete</button></form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            : "") : ""}
                    </div>
                </div>
            </div>
            <br />
        </div>
    )
}