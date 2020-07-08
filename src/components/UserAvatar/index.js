import React, {useContext} from "react";
import Avatar from '@material-ui/core/Avatar';
import componentStyles from "./css";
import {AuthContext} from "../../App";

const UserAvatar = (props) => {
    const classes = componentStyles();
    const {userInfo} = useContext(AuthContext);
    const {showName} = props;

    return (
        <div className={classes.root}>
            <Avatar variant="rounded" alt={userInfo.displayName} src={userInfo.photoURL} className={classes.small}/>
            {showName === true && <div className={classes.textAvatar}>{userInfo.displayName}</div>}
        </div>
    );
};

export default UserAvatar;
