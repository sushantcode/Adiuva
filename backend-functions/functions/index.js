const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();
const express = require('express');
const app = express();

app.get('/posts', (request, response) => {
    admin
    .firestore()
    .collection('posts')
    .get()
    .then((data) => {
        let posts = [];
        data.forEach((doc) => {
            posts.push(doc.data());
        });
        return response.json(posts);
    })
    .catch((err) => console.error(err));
});

exports.createPost = functions.https.onRequest((request, response) => {
    if (request.method !== 'POST'){
        return response.status(400).json({ error: 'This method request is not allowed.'});
    }
    const newPost = {
        userName: request.body.userName,
        body: request.body.body,
        createdAt: admin.firestore.Timestamp.fromDate(new Date())
    };

    admin
        .firestore()
        .collection('posts')
        .add(newPost)
        .then((doc) => {
            response.json({ message: `document ${doc.id} created successfully.`});
        })
        .catch((err) => {
            response.status(500).json({ error: 'something went wrong'});
            console.error(err);
        });
});

exports.api = functions.https.onRequest(app);