// importing all the required packages and components
import React, { useCallback, useState } from "react";
import Navbar from "../../MainNavbar";
import "./CreatePost.css";
import app, { storage, db } from '../../utils/fireApp';

const CreatePost = ({ history }) => {
  
    // Check if the user is logged in
    if (!(app.auth().currentUser)) {
        // Redirecting the user to log-in if logged out
        history.push("/login");
    };
    // useState to define and set value to image file
    const [img, setImg] = useState(null);
    // useState to define and set value to postType variable
    const [postType, setPostType] = useState('');
    // checking it any file has been selected
    const fileHandler = data => {
        if(data.target.files[0]) {
            setImg(data.target.files[0]);
        }
    };
    // function to control the actions when the post is submitted to be posted
    const onSubmitHandler = useCallback(
        async event => {
            event.preventDefault();
            // getting body and zipcode from the elements of the html tags
            const {
                body,
                zipCode
            } = event.target.elements;

            let errors = '';
            // validating all the input fields
            if (postType === '') {
                errors = 'Post-type must be selected.';
            }

            else if (zipCode.value.trim() === '') {
                errors = 'Zipcode must not be empty.';
            }

            if (errors !== '') {
                alert(errors);
            }
            else {
                try {
                    // uploading image to the firebase storage
                    const uploadToFirebase = storage.ref(`postImages/${img.name}`).put(img);
                    uploadToFirebase.on(
                        "state_changed",
                        snapshot => {},
                        error => {
                            alert(error);
                        },
                        () => {
                            // geting url of the image
                            storage
                                .ref("postImages")
                                .child(img.name)
                                .getDownloadURL()
                                .then(Url => {
                                    const userID = app.auth().currentUser.uid;
                                    db.collection("users").doc(userID).get()
                                    .then((doc) => {
                                        // getting user full name
                                        const userName = doc.data().fName + ' ' + doc.data().lName;
                                        // new post object to push to database
                                        const newPost = {
                                            body: body.value,
                                            createdAt: new Date().toISOString(),
                                            imgURL: Url,
                                            postType: postType,
                                            userID: userID,
                                            userName: userName,
                                            zipcode: zipCode.value
                                        };
                                        // Pushing the user information once user is signed up successfully to database
                                        db.collection("dPosts")
                                        .add(newPost)
                                        .then(() => {
                                            history.push("/feed");
                                            alert("Post has been created successfully.");
                                        })
                                        .catch((err) => {
                                            alert(err);
                                        })
                                    })
                                })
                                .catch((err) => {
                                    alert(err)
                                });
                        }
                    );
                    
                } catch (err) {
                    alert (err);
                }
            }

        }
    );


    return (
    <><Navbar />
    <div className="contact-card">
    <div className="content-box">
        <div className="content">
        <form onSubmit={onSubmitHandler}>
          <h1> Creating New Post </h1>
            <div className="radio1">
                <p><h4> *Please select one of the following options: </h4>
                <input type="radio" name="postType" value="Donation Request"
                 checked={postType === "Donation Request"} 
                 onChange={(e) => {setPostType(e.target.value)}} /> <b>Donation Request</b>
                
                <input type="radio" id="postDonate" name="postType"
                 value="Donation Offered" 
                 checked={postType === "Donation Offered"} 
                 onChange={(e) => {setPostType(e.target.value)}} /> <b>Donation Offered</b>
                </p>
            </div>

            <div className="zipcode">
                <input type="number" id="zipCode" className="zipCode" placeholder=" Enter zipcode*" />
            </div>

            <div className="description-input">
              <label htmlFor="body" className="form-label">
                <textarea
                  id="body"
                  autoFocus="autofocus"
                  className="body"
                  placeholder="Please Describe what you are posting about........"
                  />
              </label>
            </div>
              <div>
              <input className="uploadMenu" type="file" onChange={fileHandler} accept="image/png, image/jpeg" />
              </div>
              <button className="form-btnn" type="post">
                Post
              </button>
              </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default CreatePost;