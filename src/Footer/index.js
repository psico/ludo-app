import React, {useContext} from "react";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {Home, Group, Dashboard, AccountCircle, AddCircleOutline} from '@material-ui/icons';
import useStyles from "./css";
import {AuthContext} from "../App";

const Footer = () => {
    const componentClasses = useStyles();
    const {isLoggedIn} = useContext(AuthContext);

    return (
        <span>
        {
            isLoggedIn ?
                <BottomNavigation classes={{root: componentClasses.root}}>
                    <BottomNavigationAction label="Community" value="community" icon={<Home/>}/>
                    <BottomNavigationAction label="Friends" value="friends" icon={<Group/>}/>
                    <BottomNavigationAction label="Add Match" value="add-match"
                                            icon={<AddCircleOutline fontSize="default"/>}/>
                    <BottomNavigationAction label="Dashboard" value="dashboard" icon={<Dashboard/>}/>
                    <BottomNavigationAction label="My Profile" value="my-profile" icon={<AccountCircle/>}/>

                </BottomNavigation>
                :
                <BottomNavigation classes={{root: componentClasses.root}} />
        }
        </span>
    )
};

export default Footer;
