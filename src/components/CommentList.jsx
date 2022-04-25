import React from 'react';
import CommentItem from "./CommentItem";

const CommentList = ({comments, title, remove}) => {
    return (
        <div>
            <h1 style = {{textAlign: 'center'}}>
                {title}
            </h1>
            {comments.map((comment, index) =>
                <CommentItem
                    remove = {remove}
                    number = {index + 1}
                    comment = {comment}
                    key = {comment.id}
                />
            )}
        </div>
    );
};

export default CommentList;