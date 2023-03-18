import React from 'react';
import MyButton from "./UI/Button\'s/button/MyButton";
import {useHistory, useNavigate, Switch} from "react-router-dom";

const PostItem = (props) => {

    const router = useNavigate()
    console.log(router);
    return (
        <div className = "post">
            <div className= "post__content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
                <div className = "post__btns">
                    <MyButton onClick = {() => router.push('/posts/${props.post.id}')}>Open</MyButton>
                    <MyButton onClick = {() => props.remove(props.post)}>Delete</MyButton>
                </div>
            </div>
        </div>
    );
};

export default PostItem;