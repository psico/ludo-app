import React from "react";
import useStyles from "./styledComponent";
import logo from './ludo192.png';
import LogoHeader from "./LogoHeader";

console.log(logo);

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
