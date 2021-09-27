import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDJK4gy4TtJdKYMe7IGkV4H7wWMM3IUOoI",
    authDomain: "todo-app-ad7aa.firebaseapp.com",
    projectId: "todo-app-ad7aa",
    storageBucket: "todo-app-ad7aa.appspot.com",
    messagingSenderId: "202535563931",
    appId: "1:202535563931:web:690f2da9124e797cbb8c3e",
    measurementId: "G-1RJQ4S4LD3"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export {db};