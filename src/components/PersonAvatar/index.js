import React from "react";
import Avatar from '@material-ui/core/Avatar';
import componentStyles from "./css";

const PersonAvatar = ({
    showName,
    displayName,
    photoURL,
    photoSize
}) => {
    const classes = componentStyles();
    photoSize = photoSize ? classes[photoSize]: classes.small;

    return (
        <div className={classes.root}>
            <Avatar variant="rounded" alt={displayName} src={photoURL} className={photoSize}>
                {displayName.substr(0,1)}
            </Avatar>
            {showName === true && <div className={classes.textAvatar}>{displayName}</div>}
        </div>
    );
};

export default PersonAvatar;
