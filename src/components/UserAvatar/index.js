import React from "react";
import PersonAvatar from "../PersonAvatar";

const UserAvatar = ({ displayName, photoURL, showName }) => {
    console.log("showName ==> ", showName, showName || false)
    return (
        <PersonAvatar
            displayName={displayName || 'Unknown'}
            photoURL={photoURL || 'Unknown'}
            showName={!!showName}
        />
    )
};

export default UserAvatar;
