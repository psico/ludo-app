import React, {useContext} from "react";
import {AuthContext} from "../../App";
import PersonAvatar from "../PersonAvatar";

const UserAvatar = (props) => {
    const {userInfo} = useContext(AuthContext);

    return (
        <PersonAvatar
            displayName={props.displayName || userInfo.displayName}
            photoURL={props.photoURL || userInfo.photoURL}
            showName={props.showName || userInfo.showName}
        />
    )
};

export default UserAvatar;
