import React from "react";
import NavbarAuth from "./comps/navbar-auth"
import { PostForm } from "./PostForm";
import { createPost } from "./database";
import app from "./authenticate/base";

export function Create() {
    
    const onSubmit = (data) => {
        let jsonstring = JSON.stringify(data);
        let json = JSON.parse(jsonstring);

        createPost(json.title, json.description, json.grade, json.subject, app.auth().currentUser.email, Date.now().toString());
    }

    return (
        <div>
            <NavbarAuth />
            <div className="container">
                <br />
                <h1>Create Posting</h1>
                <PostForm onSubmit={onSubmit}/>
            </div>
        </div>
    )

}