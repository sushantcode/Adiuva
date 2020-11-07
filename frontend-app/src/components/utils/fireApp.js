import * as firebase from 'firebase';


const app = firebase.initializeApp({
    apiKey: "AIzaSyA2mQWzTiRkzq8VxQxbpAxEpnjLePQo4Z8",
    authDomain: "helpme-b7e48.firebaseapp.com",
    databaseURL: "https://helpme-b7e48.firebaseio.com",
    projectId: "helpme-b7e48",
    storageBucket: "helpme-b7e48.appspot.com",
    messagingSenderId: "112348268808",
    appId: "1:112348268808:web:99e8308defcfa614d404bd",
    measurementId: "G-EN26NVPQ60"
 });

export const db = firebase.firestore(app);
export const storage = firebase.storage(app);
export default app;
 