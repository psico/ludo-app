import React from "react";
import PersonAvatar from "../PersonAvatar";

const UserAvatar = (props) => {
    return (
        <PersonAvatar
            displayName={props.displayName || 'Unknown'}
            photoURL={props.photoURL || 'Unknown'}
            showName={props.showName || false}
        />
    )
};

export default UserAvatar;
