import React from "react";
import "./footer.css";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Home, Group, Dashboard, AccountCircle } from '@material-ui/icons';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const Footer = () => (
    <BottomNavigation
        className="footer"
    >
        <BottomNavigationAction label="Community" value="community" icon={<Home />}/>
        <BottomNavigationAction label="Friends" value="friends" icon={<Group />}/>
        <BottomNavigationAction label="Add Match" value="add-match" icon={<AddCircleOutlineIcon fontSize="large" color="action" />}/>
        <BottomNavigationAction label="Dashboard" value="dashboard" icon={<Dashboard />}/>
        <BottomNavigationAction label="My Profile" value="my-profile" icon={<AccountCircle />} />
    </BottomNavigation>
);

export default Footer;
