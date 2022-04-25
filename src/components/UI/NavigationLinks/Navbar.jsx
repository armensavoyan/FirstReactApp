import React from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";

const Navbar = () => {

    let props;
    return (
        <div className = "navbar">
            <div className = ".navbar__links">
                <Link to = "/comments">
                    <div className = "post__btns">
                        <MyButton onClick = {() => props.remove(props.post)}>
                            Открыть комментарии
                        </MyButton>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;