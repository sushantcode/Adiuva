import React, { Component } from "react";
import Navbar from "../../MainNavbar";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import CalendarToday from '@material-ui/icons/CalendarToday';
import Link from 'react-router-dom/Link';
import app, { db } from '../../utils/fireApp';
import './UserProfile.css';

// Class to handle the static user profile
class UserProfile extends Component {
    state = {
        user: {
            fName: "",
            mName: "",
            lName: "",
            city: "",
            zipcode: "",
            state: "",
            imgURL: "",
            about: "",
            registeredAt: null
        },
        dPosts: null,
        userID: ""
    }
    componentDidMount(){
        // geting user id from the link component
      const uid  = this.props.location.state.uid;
      // fetching user informations from database
      db
        .collection("users")
        .doc(uid)
        .get()
        .then((doc) => {
            this.setState({
                user:  {    
                    fName: doc.data().fName,
                    mName: doc.data().mName,
                    lName: doc.data().lName,
                    city: doc.data().city,
                    zipcode: doc.data().zipcode,
                    state: doc.data().stateName,
                    imgURL: doc.data().imgURL,
                    about: doc.data().about,
                    registeredAt: doc.data().registeredAt
                },
                userID: uid
            });
        })
        .catch((err) => alert(err));
        
        db
        .collection("dPosts")
        .where("userID", "==", uid)
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
                    imgURL: doc.data().imgURL,
                    createdAt: doc.data().createdAt,
                    uid: doc.data().userID,
                });
            });
            this.setState({
                dPosts: posts,
            });
        })
        .catch((err) => alert(err));
    };
    render () {
        dayjs.extend(relativeTime);
        const { history } = this.props;
        if (!(app.auth().currentUser)) {
            // Redirecting the user to log-in if logged out
            history.push("/login");
        };

        let recentDposts = this.state.dPosts ? (
            this.state.dPosts.map((dPost) => 
                <Card className="card" justify="center" alignContent="center">
                    <CardContent className="card-content">
                    <div className="authorDetail">
                        <Typography variant="body2" color="textSecondary">{dayjs(dPost.createdAt).fromNow()}</Typography>
                        <Typography variant="body1"><b>Post-Type: {dPost.postType}</b></Typography>
                        <Typography variant="body1">Zipcode: {dPost.zipcode}</Typography>
                    </div>
                        <Typography variant="body1">{dPost.body}</Typography>
                        <CardMedia component="img" image={dPost.imgURL} title="Post Image" className="img" />
                    </CardContent>
                </Card>)
            ) : <p> Loading... </p>;

        return (
            <><Navbar /><div className="user-container">
            <div class="row py-5 px-4">
                <div class="col-md-5 mx-auto">
                    <div class="bg-white">
                        <div class="px-4 pt-0 pb-4 cover">
                            <div class="media align-items-end profile-head">
                                <div class="profile mr-3">
                                    <img src={this.state.user.imgURL} alt="Profile" width="200" class="rounded mb-2 img-thumbnail"></img>
                                    </div>
                                <div class="media-body mb-5 text-white">
                                    <h2 class="mt-0 mb-0">{this.state.user.fName} {this.state.user.lName}</h2>
                                        <h3><i class="fas fa-map-marker-alt mr-2 mb-2"></i> {this.state.user.city}, {this.state.user.state}</h3>
                                        <p class="mb-4">
                                            <CalendarToday color="primary" />{' '}<b>Joined {dayjs(this.state.user.registeredAt).format('MMM YYYY')}</b>
                                        </p>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div class="bg-light p-4 d-flex justify-content-end text-center">
                            <ul class="list-inline mb-0">
                                <li class="list-inline-item">
                                    <Link 
                                    class="connect-btn btn-outline-dark btn-block" 
                                    to={`/chat/${this.state.userID}`}>
                                        <h2><b><i class="far fa-comments"></i> {" "}Message</b></h2>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div class="px-4 py-3">
                            <h3 class="mb-0">About</h3>
                            <div class="p-4 rounded shadow-sm bg-light">
                                <p class="font-italic mb-0">{this.state.user.about}</p>
                            </div>
                        </div>
                        <div class="py-4 px-4">
                            <div class="d-flex align-items-center justify-content-between mb-3">
                                <h3 class="mb-0">Activities/Posts</h3>
                            </div>
                            <div class="row col-md-4 mx-auto">
                                {recentDposts}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </>
        );
    }
};

export default UserProfile;
