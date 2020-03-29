import React from "react";
import Avatar from '@material-ui/core/Avatar';
import componentStyles from "./css";
import jg from '../temp-images/tempImage.jpg';

const UserAvatar = () => {
    const classes = componentStyles();

    return (<Avatar variant="rounded" alt="João Gabriel" src={jg} className={classes.small} />);
};

export default UserAvatar;
