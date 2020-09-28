const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
const express = require("express");
const app = express();

app.get("/dPosts", (request, response) => {
    admin
        .firestore()
        .collection("dPosts")
        .get()
        .then((data) => {
            let posts = [];
            data.forEach((doc) => {
                posts.push({
                    postID: doc.id,
                    userName: doc.data().userName,
                    postType: doc.data().postType,
                    body: doc.data().body,
                    createdAt: doc.data().createdAt,
                });
            });
            return response.json(posts);
        })
        .catch((err) => console.error(err));
});

app.post("/dPosts", (request, response) => {
    const newPost = {
        userName: request.body.userName,
        postType: request.body.postType,
        body: request.body.body,
        createdAt: admin.firestore.Timestamp.fromDate(new Date()),
    };

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
            response.status(500).json({ error: "something went wrong" });
            console.error(err);
        });
});

exports.api = functions.https.onRequest(app);
