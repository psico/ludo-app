import React from "react";
import useStyles from "./styledComponent";
import LogoHeader from "./LogoHeader";

const Header = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.positionHeader}>
            <div>
                <LogoHeader {...props}/>
            </div>
        </div>
    );
};

export default Header;
