import React from "react";
import componentStyles from "./css";
import LogoHeader from "./LogoHeader";

const Header = (props) => {
    const classes = componentStyles();

    return (
        <div className={classes.positionHeader}>
            <div>
                <LogoHeader {...props}/>
            </div>
        </div>
    );
};

export default Header;
