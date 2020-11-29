import React, { Component } from "react";
import Navbar from "../../MainNavbar";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from 'react-router-dom/Link';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import app, { db } from '../../utils/fireApp';
import './Feed.css';


class Feed extends Component {
    
    state = {
        dPosts: null,
        radioCheck: false,
        postType: "All",
        zipcode: ""
    };
    componentDidMount(){
        db
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
                    imgURL: doc.data().imgURL,
                    createdAt: doc.data().createdAt,
                    uid: doc.data().userID,
                });
            });
            this.setState({
                dPosts: posts
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
        this.state.dPosts.filter(dPost => 
            (this.state.postType === "All" && true) ||
           dPost.postType === this.state.postType
        ).filter(dPost => 
            (this.state.zipcode === "" && true) ||
           dPost.zipcode === this.state.zipcode
        ).map((dPost) => 
            <Card className="card" justify="center" alignContent="center">
                <CardContent className="card-content">
                <div className="authorDetail">
                    <Typography gutterBottom variant="h5" component={Link} 
                    to={{
                        pathname: "/users",
                        state: {
                            uid: dPost.uid}
                        }}>
                        {dPost.userName}
                    </Typography>
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
            <><Navbar />
            <div className="post-container">
            <Grid container spacing={10}>
                <Grid item sm={8} xs={12}>
                    {recentDposts}
                </Grid>
                <Grid item sm={4} xs={12} component={Paper}>
                <h1>Filter Posts: </h1> <br />
                <h2>By Post-Type</h2>
                <label className="selectPostType">
                    <input 
                    id="post-type"
                    type="radio" 
                    className="posttype-filter" 
                    value="All"
                    checked={this.state.postType === "All"} 
                    onChange={e => {this.setState({postType: e.target.value})}}  
                    />
                    All
                </label>
                <br />
                <label className="selectPostType">
                    <input 
                    id="post-type"
                    type="radio" 
                    className="posttype-filter" 
                    value="Donation Request"
                    checked={this.state.postType === "Donation Request"} 
                    onChange={e => {this.setState({postType: e.target.value})}}  
                    />
                     Donation Request
                </label>
                <br />
                <label className="selectPostType">
                    <input 
                    id="post-type"
                    type="radio" 
                    className="posttype-filter" 
                    value="Donation Offered"
                    checked={this.state.postType === "Donation Offered"} 
                    onChange={e => {this.setState({postType: e.target.value})}}  
                    />
                     Donation Offered
                </label>
                <br /> <br />
                <h2>By Zipcode:</h2>
                <label className="selectPostType">
                    <input 
                    id="input"
                    type="text" 
                    className="zipcode-filter" 
                    value={this.state.zipcode}
                    onChange={e => {this.setState({zipcode: e.target.value})}}  
                    />
                </label>
                </Grid>
            </Grid>
            </div>
            </>
        );
    }
};

export default Feed;
