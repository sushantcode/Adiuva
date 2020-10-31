import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        display: 'flex'
    }
}
class DPost extends Component {
    render() {
        const { dPost : {
            body,
            createdAt,
            postType,
            zipcode,
            userName
        } } = this.props;
        return (
            <Card>
                {/* <Typography gutterBottom variant="h5" component="h2">
                    {userName}
                </Typography> */}
                <CardContent>
                    <Typography variant="body2" color="textSecondary">{createdAt}</Typography>
                    <Typography variant="body1">{body}</Typography>
                </CardContent>
            </Card>
        )
    }
}

export default withStyles(styles)(DPost);
