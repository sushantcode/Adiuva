import React, { Component } from "react";
import { withRouter } from 'react-router';
import Navbar from "../../MainNavbar";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Link from 'react-router-dom/Link';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import app, { db } from '../../utils/fireApp';


class Feed extends Component {
    
    state = {
        dPosts: null
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
        this.state.dPosts.map((dPost) => 
            <Card className="card">
                <CardContent className="content">
                    <Typography gutterBottom variant="h5" component={Link} to='/users'>
                        {dPost.userName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">{dayjs(dPost.createdAt).fromNow()}</Typography>
                    <Typography variant="body1"><b>Post-Type: {dPost.postType}</b></Typography>
                    <Typography variant="body1">Zipcode: {dPost.zipcode}</Typography>
                    <Typography variant="body1">{dPost.body}</Typography>
                    <CardMedia component="img" image={dPost.imgURL} title="Post Image" className="img" />
                </CardContent>
            </Card>)
        ) : <p> Loading... </p>
        return (
            <><Navbar />
            <Grid container justify='center' alignItems='center' alignContent='center'>
                <Grid item sm={8} xs={12} justify='center' alignItems='center' alignContent='center'>
                    {recentDposts}
                </Grid>
            </Grid>
            </>
        );
    }
}

export default withRouter(Feed);
