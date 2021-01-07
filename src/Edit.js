import React, { useState, useEffect } from "react";
import { PostForm } from "./PostForm";
import NavbarAuth from "./comps/navbar-auth";

export function Edit() {

    const [posting, setPosting] = useState();

    useEffect(() => {
        setPosting({
            title: "yes",
            description: "wht",
            grade: "3",
            subject: "science"
        })
    }, []);

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    }

    return (
    <div>
        <NavbarAuth />
        <div className="container">
        <br />
        <h1>Edit Posting</h1>
        <PostForm posting={posting} onSubmit={onSubmit}/>
        </div>
    </div>
    )}

