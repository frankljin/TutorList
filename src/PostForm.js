import React from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

export const PostForm = ({posting, onSubmit }) => {

    const { register, handleSubmit } = useForm({default: {
        title: posting ? posting.title : "",
        description: posting ? posting.description : "",
        grade: posting ? posting.grade : "",
        subject: posting ? posting.subject : "",
        date: posting ? posting.date : ""
    }});

    const history = useHistory();

    const handlePost = handleSubmit((data) => {
        onSubmit(data);
        history.push("/postings");
    })

    return (
            <div className="container">
                <form onSubmit={handlePost}>
                    <p>Post Title:</p>
                    <Form.Control name="title" type="title" ref={register} required />
                    <br />
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Post Description:</Form.Label>
                        <Form.Control as="textarea" name="description" ref={register} rows={3} required />
                    </Form.Group>
                    <div class="form-group">
                        <label>Grade Level:</label>
                        <select class="form-control" name="grade" ref={register} required>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Subject:</label>
                        <select class="form-control" name="subject" ref={register} required>
                            <option>Math</option>
                            <option>Science</option>
                            <option>Language</option>
                            <option>Social</option>
                        </select>
                    </div>
                    <input type="submit" name="submit" class="btn btn-info btn-md" value="Post"></input>
                </form>
            </div>
    )}