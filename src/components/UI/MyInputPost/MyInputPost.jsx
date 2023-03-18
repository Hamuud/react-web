import React from 'react';
import classes from './MyInputPost.module.css';
const MyInputPost = React.forwardRef((props, ref) => {
    return (
        <input ref = {ref} className={classes.MyInputPost} {...props}/>
    );
});

export default MyInputPost;