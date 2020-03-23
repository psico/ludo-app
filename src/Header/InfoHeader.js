import React from "react";
import Avatar from '@material-ui/core/Avatar';
import useStyles from "./styledComponent";
import jg from '../temp-images/tempImage.jpg';
import lvl from "../temp-images/lvl-coronel.png";

const InfoHeader = () => {
    const classes = useStyles();

    return (
        <div className={classes.infoHeader}>
            <Avatar variant="rounded" alt="João Gabriel" src={jg} className={classes.small} />
            <img src={lvl} alt="user lvl" height="25"/>
        </div>
    );
};

export default InfoHeader;
