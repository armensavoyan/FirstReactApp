import React from 'react';
import MyButton from "./UI/button/MyButton";


const CommentItem = (props) => {
    return (
        <div className = "comment">
            <div className = "comment__content">
                <strong>{props.number}. {props.comment.title}</strong>
                <div>
                    {props.comment.body}
                </div>
            </div>
            <div className = "comment__btns">
                <MyButton onClick = {() => props.remove(props.comment)}>
                    Удалить комментарий
                </MyButton>
            </div>
        </div>
    );
}

export default CommentItem;