import React, { Component } from "react";
import { withRouter } from 'react-router';
import Navbar from "../../MainNavbar";
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import app from '../../utils/fireApp';


class Feed extends Component {
    
    state = {
        dPosts: null
    };
    componentDidMount(){
        axios.get('/dPosts')
            .then((res) => {
                this.setState({
                    dPosts: res.data
                })
            })
            .catch(err => console.log(err));
    }
    render () {
        const { history } = this.props;
        if (!(app.auth().currentUser)) {
            // Redirecting the user to log-in if logged out
            history.push("/login");
        };

        let recentDposts = this.state.dPosts ? (
        this.state.dPosts.map((dPost) => 
            <Card className="card">
                <CardContent className="content">
                    <Typography gutterBottom variant="h5" component="h2">
                        {dPost.userName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">{dPost.createdAt}</Typography>
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
