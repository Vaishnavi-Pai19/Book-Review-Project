import React, {useState, useEffect} from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({        // Initializes postData (an object) with empty values for its strings
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    });
    const post = useSelector((state) => 
       currentId ? state.posts.find((p) => p._id === currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect (() => {
        if (post) setPostData(post);
    }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch (updatePost(currentId, postData));
        } else {
            dispatch (createPost(postData));
        }
        clear();
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    const clear = () => {
        setCurrentId(0);
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: ''})
    }

    return (
        <Paper className = {classes.paper}>
            <form autoComplete="off" noValidate className = {`${classes.root} ${classes.form}`} onSubmit = {handleSubmit} onKeyPress = {handleKeyPress}>
                <Typography className = {classes.heading} variant = "h6">Leave a Book Review of your Favourite Books!</Typography>
                <TextField
                    name = "creator"
                    variant = "outlined"
                    label = "User"
                    fullWidth value = {postData.creator}
                    onChange = {(e) => setPostData({ ...postData, creator: e.target.value })}     // Spreads the properties of the current postData object and then updating the creator property
                />
                <TextField name = "title" variant = "outlined" label = "Name of the Book" fullWidth value = {postData.title} onChange = {(e) => setPostData({ ...postData, title: e.target.value })}/>
                <TextField name = "message" variant = "outlined" label = "Review" fullWidth value = {postData.message} onChange = {(e) => setPostData({ ...postData, message: e.target.value })}/>
                <TextField name = "tags" variant = "outlined" label = "Tags" fullWidth value = {postData.tags} onChange = {(e) => setPostData({ ...postData, tags: e.target.value.split(/\s*,\s*/) })}/>
                <div className = {classes.fileInput}>
                    <FileBase 
                       type = "file"
                       multiple = {false}
                       onDone = {({base64}) => setPostData({ ...postData, selectedFile: base64})}
                    />
                    <Button className = {classes.buttonSubmit} variant = "contained" color = "primary" size = "large" type = "submit" fullWidth>Submit</Button>
                    <Button variant = "contained" color = "secondary" size = "small" onClick = {clear} fullWidth>Clear</Button>
                </div>
            </form>
        </Paper>
    );
}

export default Form;