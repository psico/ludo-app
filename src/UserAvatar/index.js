import React, {useContext} from "react";
import Avatar from '@material-ui/core/Avatar';
import componentStyles from "./css";
// import jg from '../temp-images/tempImage.jpg';
import {AuthContext} from "../App";

const UserAvatar = () => {
    const classes = componentStyles();
    const {userInfo} = useContext(AuthContext);

    return (
        <div className={classes.root}>
            <Avatar variant="rounded" alt={userInfo.displayName} src={userInfo.photoURL} className={classes.small}/>
            <div className={classes.textAvatar}>{userInfo.displayName}</div>
        </div>
    );
};

export default UserAvatar;
