// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
const app = firebase.initializeApp({
    apiKey: "AIzaSyDLK7Y4cnef-GLF5h5fyrxOPmh3HO8nYeA",
    authDomain: "rhelp-e8bf2.firebaseapp.com",
    projectId: "rhelp-e8bf2",
    storageBucket: "rhelp-e8bf2.appspot.com",
    messagingSenderId: "147466076822",
    appId: "1:147466076822:web:0aaeda4d9ea2be8de2b8b7",
    measurementId: "G-MSGG5FYMR3",
});

// Initialize Firebase
export const auth = app.auth();
export const database = app.database();
export default app;
