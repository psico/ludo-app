import React from "react";
import "./footer.css";
import {
    BottomNavigation,
    BottomNavigationAction
} from "@material-ui/core";

const Footer = () => (
    <BottomNavigation
        showLabels
        className="footer"
    >
        <BottomNavigationAction label="Community" value="community"/>
        <BottomNavigationAction label="Friends" value="friends"/>
        <BottomNavigationAction label="Add Match" value="add-match"/>
        <BottomNavigationAction label="Games" value="games" />
        <BottomNavigationAction label="My Profile" value="my-profile" />
    </BottomNavigation>
);

export default Footer;
