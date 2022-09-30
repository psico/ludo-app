import React from "react";
import PersonAvatar from "../PersonAvatar";

const UserAvatar = ({ displayName, photoURL, showName, photoSize }) => {
    return (
        <PersonAvatar
            displayName={displayName || 'Unknown'}
            photoURL={photoURL || 'Unknown'}
            showName={!!showName}
            photoSize={photoSize}
        />
    )
};

export default UserAvatar;
