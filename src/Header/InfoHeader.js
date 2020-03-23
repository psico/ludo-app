import React from "react";
import Avatar from '@material-ui/core/Avatar';
import useStyles from "./styledComponent";
import jg from '../temp-images/tempImage.jpg';

const InfoHeader = () => {
    const classes = useStyles();

    return (
        <div className={classes.infoHeader}>
            <Avatar variant="rounded" alt="João Gabriel" src={jg} className={classes.small} />
        </div>
    );
};

export default InfoHeader;
