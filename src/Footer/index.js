import React, {useContext} from "react";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {Home, Group, Dashboard, AccountCircle, AddCircleOutline} from '@material-ui/icons';
import useStyles from "./css";
import {AuthContext} from "../App";
import {useTranslation} from 'react-i18next';

const Footer = () => {
    const componentClasses = useStyles();
    const [value, setValue] = React.useState(0);
    const {isLoggedIn} = useContext(AuthContext);
    const {t} = useTranslation();

    return (
        <span>
        {isLoggedIn ?
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                classes={{root: componentClasses.root}}>
                <BottomNavigationAction label={t('community')} value="community" icon={<Home/>}/>
                <BottomNavigationAction label={t('friends')} value="friends" icon={<Group/>}/>
                <BottomNavigationAction label={t('add-match')} value="add-match"
                                        icon={<AddCircleOutline fontSize="default"/>}/>
                <BottomNavigationAction label={t('dashboard')} value="dashboard" icon={<Dashboard/>}/>
                <BottomNavigationAction label={t('my-profile')} value="my-profile" icon={<AccountCircle/>}/>

            </BottomNavigation>
            :
            <BottomNavigation classes={{root: componentClasses.root}}/>
        }
        </span>
    )
};

export default Footer;
