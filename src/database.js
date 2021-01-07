import firebase from "firebase";

export const createPost = (title, description, grade, subject, poster, date) => {

    const postData = {
        title: title,
        description: description,
        grade: grade,
        subject: subject,
        poster: poster,
        date: date
    }

    const newPost= firebase.database().ref("posts");
    
    newPost.push(postData);
}

export const deletePost = key => {

    if (window.confirm("Are you sure you want to delete this posting?")) {
        firebase.database().ref("posts").child(key).remove();
    }}
            
    
    

