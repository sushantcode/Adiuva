import React, { Component } from "react";
import Navbar from "../../MainNavbar";
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
//import DPost from './DPost';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const styles = {
    card: {
        display: 'flex'
    }
}

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
        let recentDposts = this.state.dPosts ? (
        this.state.dPosts.map((dPost) => 
        <Card>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {dPost.userName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">{dPost.createdAt}</Typography>
                    <Typography variant="body1">Post-Type: {dPost.postType}</Typography>
                    <Typography variant="body1">Zipcode: {dPost.zipcode}</Typography>
                    <Typography variant="body1">{dPost.body}</Typography>
                    <CardMedia image={dPost.postImage} title="Post Image" />
                </CardContent>
        </Card>)
        ) : <p> Loading... </p>
        return (
            <><Navbar />
            <Grid container justify='center' alignItems='center'>
                <Grid item sm={8} xs={12}>
                    {recentDposts}
                </Grid>
            </Grid>
            </>
        );
    }
}

export default Feed;
