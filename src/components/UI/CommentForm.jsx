import React, {useState} from 'react';
import MyInput from "./input/MyInput";
import MyButton from "./button/MyButton";

const CommentForm = ({create}) => {
    const [comment, setComment] = useState({title: '', body: ''});

    const addNewComment = (e) => {
        e.preventDefault()
        const newComment = {
            ...comment, id: Date.now()
        }
        create(newComment)
        setComment({title: '', body: ''})
    }

    return (
        <form>
            {/*Управляемый компонент*/}
            <MyInput
                value = {comment.title}
                onChange = {e => setComment({...comment, title: e.target.value})}
                type = "text"
                placeholder = "имя пользователя"
            />
            <MyInput
                value = {comment.body}
                onChange = {e => setComment({...comment, body: e.target.value})}                type = "text"
                placeholder = "комментарий"
            />
            <MyButton onClick = {addNewComment}>добавить комментарий</MyButton>
        </form>
    );
};

export default CommentForm;

