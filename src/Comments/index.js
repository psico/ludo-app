import React from "react";
import useStyles from "./css";
import UserAvatar from "../UserAvatar";

const Comments = (props) => {
    const componentClasses = useStyles();

    return (
        <div>
            <UserAvatar showImage={true} showName={true}/>comments {props.postId}
        </div>
    )
};

export default Comments;
