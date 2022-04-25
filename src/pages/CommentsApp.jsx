import React, {useState} from 'react';
import CommentList from "../components/CommentList";
import CommentForm from "../components/UI/CommentForm";

function CommentsApp() {
    const [comments, setComments] = useState([
        {id: 1, title: 'JavaScript1', body: 'description1'},
        {id: 2, title: 'JavaScript2', body: 'description2'},
        {id: 3, title: 'JavaScript3', body: 'description3'},
    ])


    const createComment = (newComment) => {
        setComments([...comments, newComment])
    }

    const removeComment = (comment) => {
        setComments(comments.filter(c => c.id !== comment.id))
    }

    return (
        <div className="CommentsApp">
            <CommentList
                remove = {removeComment}
                comments = {comments} title = "Список комментариев"
            />

            <CommentForm create = {createComment}/>
        </div>
    );

}

export default CommentsApp;
