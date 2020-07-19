import React from "react";
import Avatar from '@material-ui/core/Avatar';
import componentStyles from "./css";

const PersonAvatar = (props) => {
    const classes = componentStyles();
    const {
        showName,
        displayName,
        photoURL
    } = props;

    return (
        <div className={classes.root}>
            <Avatar variant="rounded" alt={displayName} src={photoURL} className={classes.small}>
                {displayName.substr(0,1)}
            </Avatar>
            {showName === true && <div className={classes.textAvatar}>{displayName}</div>}
        </div>
    );
};

export default PersonAvatar;
