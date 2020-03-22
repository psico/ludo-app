import React from "react";
import useStyles from "./styledComponent";

const InfoHeader = () => {
    const classes = useStyles();

    return (
        <div className={classes.infoHeader}>
            <div>Info header</div>
            Info header
        </div>
    );
};

export default InfoHeader;
