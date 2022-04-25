import React from 'react';
import Navbar from "./NavigationLinks/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CommentsApp from "../../pages/CommentsApp";

const PostItem = (props) => {
    return (
        <div className = "post">

            <div className = "post__content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>

            <BrowserRouter>
                <Navbar/>
                <Routes>
                        <Route
                            path = "/comments"
                            element = {<CommentsApp/>}>
                        </Route>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default PostItem;