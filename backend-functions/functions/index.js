//defining variables for the firebase-function and firebase database authetication components
const functions = require("firebase-functions");
const fire_admin = require("firebase-admin");

// Importing express frameworks element as methods
const app = require("express")();

//initializing the app with admin access and giving varibale to express function
fire_admin.initializeApp();

const firebaseConfig = {
    apiKey: "AIzaSyA2mQWzTiRkzq8VxQxbpAxEpnjLePQo4Z8",
    authDomain: "helpme-b7e48.firebaseapp.com",
    databaseURL: "https://helpme-b7e48.firebaseio.com",
    projectId: "helpme-b7e48",
    storageBucket: "helpme-b7e48.appspot.com",
    messagingSenderId: "112348268808",
    appId: "1:112348268808:web:99e8308defcfa614d404bd",
    measurementId: "G-EN26NVPQ60"
  };



const firebase = require('firebase');
firebase.initializeApp(firebaseConfig);

//function to retrieve posts already posted in firebase firestore database
app.get("/dPosts", (request, response) => {
    fire_admin
        .firestore()
        .collection("dPosts")
        .get()
        .then((data) => {
            let posts = [];
            //pushing each and every posts after retrieving from firebase database to posts[]
            data.forEach((doc) => {
                posts.push({
                    postID: doc.id,
                    userName: doc.data().userName,
                    postType: doc.data().postType,
                    body: doc.data().body,
                    zipcode: doc.data().zipcode,
                    createdAt: doc.data().createdAt,
                });
            });
            return response.json(posts);
        })
        .catch((err) => console.error(err));
});

//function to create new donation post
app.post("/dPosts", (request, response) => {
    //definig post as an array
    const newPost = {
        userName: request.body.userName,
        postType: request.body.postType,
        body: request.body.body,
        zipcode: request.body.zipcode,
        createdAt: new Date().toISOString(),
    };

    //pushing the post components into firebase
    fire_admin
        .firestore()
        .collection("dPosts")
        .add(newPost)
        .then((doc) => {
            response.json({
                message: `document ${doc.id} created successfully.`,
            });
        })
        .catch((err) => {
            //catching internal serval error
            response.status(500).json({ error: "something went wrong" });
            console.error(err);
        });
});

//Sign up api route
app.post('/register', (require, response) => {
    const newUser = {
        fName: require.body.fName,
        mName: require.body.mName,
        lName: require.body.lName,
        city: require.body.city,
        stateName: require.body.stateName,
        email: require.body.email,
        password: require.body.password,
        re_password: require.body.password,
        userName: require.body.userName,
        zipcode: require.body.zipcode,

    }

    // Validation of user inputs
    let errors = {};
    
    if (newUser.fName.trim() == '') {
        errors.fName = 'First Name cannot be blank';
    }

    if (newUser.lName.trim() == '') {
        errors.lName = 'Last Name cannot be blank';
    }

    if (newUser.stateName.trim() == '') {
        errors.stateName = 'State cannot be blank';
    }

    if (!(newUser.email.trim() == '')) {
        const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!(newUser.email.match(emailRegEx))) {
            errors.email = 'Invalid email';
        }
    }
    else {
        errors.email = 'Email cannot be blank';
    }

    if (newUser.password.trim() == '') {
        errors.password = 'Password cannot be blank';
    }

    if (newUser.password != newUser.re_password) {
        errors.re_password = 'Passwords must match';
    }

    if (newUser.userName.trim() == '') {
        errors.userName = 'Username cannot be blank';
    }

    if (Object.keys(errors).length > 0) {
        return response.status(400).json(errors);
    }

    let newUserID;
    fire_admin
        .firestore()
        .doc(`/users/${newUser.userName}`)
        .get()
            .then((thisUser) => {
                if (!(thisUser.exists)) {
                    return firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
                            .then((data) => {
                                newUserID = data.user.uid;
                                return data.user.getIdToken();
                            })
                            .then((token) => {
                                const newUserDetails = {
                                    fName: newUser.fName,
                                    mName: newUser.mName,
                                    lName: newUser.lName,
                                    city: newUser.city,
                                    stateName: newUser.stateName,
                                    userName: newUser.userName,
                                    email: newUser.email,
                                    userName: newUser.userName,
                                    zipcode: newUser.zipcode,
                                    newUserID,
                                    registeredAt: new Date().toISOString(),
                                };
                                fire_admin.firestore().doc(`/users/${newUser.userName}`).set(newUserDetails);
                                return response.status(201).json({ token });
                            })
                            .catch((err) => {
                                console.error(err);
                                return response.status(500).json({ error: err.code });
                            });
                }
                else {
                    return response.status(400).json({ error: 'This username is not available.' });
                }
            })

})

exports.api = functions.https.onRequest(app);
