import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAZRifNQprqFK_sqxiROeCtkhm74dkdKjQ",
    authDomain: "chat-app-mern-98174.firebaseapp.com",
    projectId: "chat-app-mern-98174",
    storageBucket: "chat-app-mern-98174.appspot.com",
    messagingSenderId: "1088145201110",
    appId: "1:1088145201110:web:3eac581db410546d507677",
    measurementId: "G-XRKG5BJYSS"
});

const auth = firebase.auth();
const storage = firebase.storage();


export {auth, storage};