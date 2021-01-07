import React, { useState, useEffect } from "react";
import NavbarAuth from "../comps/navbar-auth";
import "../styles/App.css";
import firebase from "firebase";
import { Link } from "react-router-dom";
import { Filter } from "../comps/filters";

export function Math() {
    return Subject("Math");
}

export function Science() {
    return Subject("Science");
}

export function Lang() {
    return Subject("Language");
}

export function Social() {
    return Subject("Social")
}
export function Subject(choice) {
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

    return (
        <div>
            <NavbarAuth />
            <div className="container">
                <br />
                <h1>Postings</h1>
                <br />
                <div className="row">
                    <Filter />
                    <div class="container col row">
                        {posts ? posts.map((posting, index) => (
                            posting.subject === choice) ?
                            <div class="card-deck col-sm-4">
                                <div className="card" >
                                    <div className="card-body">
                                        <h5 className="card-title">{posting.title}</h5>
                                        <p className="card-text">{posting.description}</p>
                                        <span class="badge badge-pill badge-danger">Grade {posting.grade}</span>
                                        <span class="badge badge-pill badge-primary">{posting.subject}</span>
                                        <p className="card-text"><small className="text-muted">{posting.poster}</small></p>
                                        <Link className="text-info" to={`/edit/${index}`}>Edit</Link>
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
