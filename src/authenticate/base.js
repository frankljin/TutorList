import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyCtPIawiqYLAz2nZVHpa69ZJkSCsQT5nWQ",
    authDomain: "tutorapp-c5044.firebaseapp.com",
    databaseURL: "https://tutorapp-c5044-default-rtdb.firebaseio.com",
    projectId: "tutorapp-c5044",
    storageBucket: "tutorapp-c5044.appspot.com",
    messagingSenderId: "371474053038",
    appId: "1:371474053038:web:622d3519f7d5295a9fba3f",
    measurementId: "G-B1068XDDSR"
});

export default app;