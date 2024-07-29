import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';

import moment from 'moment';
import useStyles from './styles';


const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            {/* Displays the book cover*/}
            <CardMedia className = {classes.media} image = {post.selectedFile} title = {post.title}/>

            {/* Displays the creator's name and time created */}
            <div className = {classes.overlay}>
                <Typography variant = "h6">{post.creator}</Typography>
                <Typography variant = "body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>

            {/* The 'more options' menu */}
            <div className = {classes.overlay2}>
                <Button style = {{color: 'white'}} size = "small" onClick = {() => {setCurrentId(post._id)}}>
                    <MoreHorizIcon fontSize = "default" />
                </Button>
            </div>

            {/* Displays the tags */}
            <div className = {classes.details}>
                <Typography variant = "body2" color = "textSecondary" component = "h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
   
            {/* Displays the title of the book */}
            <Typography className = {classes.title} variant = "h5" gutterBottom>{post.title}</Typography>

            {/* Contains the review uploaded by creator */}
            <CardContent>
                <Typography variant = "body2" color = "textSecondary" component = "p">{post.message}</Typography>
            </CardContent>

            {/* The Like button and the Delete button */}
            <CardActions className = {classes.cardActions}>
                <Button size = "small" color = "primary" onClick = {() => dispatch(likePost(post._id))}>
                    <ThumbUpAltIcon fontSize = "small" /> Like {post.likeCount} </Button>

                <Button size = "small" color = "primary" onClick = {() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize = "small" />Delete </Button>
            </CardActions> 
        </Card>
    );
};

export default Post;