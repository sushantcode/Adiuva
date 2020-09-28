//defining variables for the firebase-function and firebase database authetication components
const functions = require("firebase-functions");
const admin = require("firebase-admin");

//initializing the app with admin access and giving varibale to express function
admin.initializeApp();
const express = require("express");
const app = express();

//function to retrieve posts already posted in firebase firestore database
app.get("/dPosts", (request, response) => {
    admin
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
        createdAt: admin.firestore.Timestamp.fromDate(new Date()),
    };

    //pushing the post components into firebase
    admin
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

exports.api = functions.https.onRequest(app);
