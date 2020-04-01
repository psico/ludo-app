import React from "react";
import useStyles from "./css";

const Comments = (props) => {
    const componentClasses = useStyles();

    return (
        <div>
            comments {props.postId}
        </div>
    )
};

export default Comments;
