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
        <BottomNavigationAction label="Recents" value="recents"/>
        <BottomNavigationAction label="Favorites" value="favorites"/>
        <BottomNavigationAction label="Nearby" value="nearby" />
        <BottomNavigationAction label="Folder" value="folder" />
    </BottomNavigation>
);

export default Footer;
