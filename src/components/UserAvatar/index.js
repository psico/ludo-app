import React, {useContext} from "react";
import {AuthContext} from "../../App";
import PersonAvatar from "../PersonAvatar";

const UserAvatar = (props) => {
    const {userInfo} = useContext(AuthContext);

    return (
        <PersonAvatar
            displayName={userInfo.displayName}
            photoURL={userInfo.photoURL}
            showName={props.showName}
        />
    )
};

export default UserAvatar;
