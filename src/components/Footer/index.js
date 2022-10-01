import React, {useContext} from "react";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Home, AccountCircle, AddCircleOutline } from '@material-ui/icons';
import useStyles from "./css";
import {AuthContext} from "../../App";
import {useTranslation} from 'react-i18next';
import {withRouter} from 'react-router-dom';

const Footer = ({history}) => {
    const componentClasses = useStyles();
    const [value, setValue] = React.useState('community');
    const {userInfo} = useContext(AuthContext);
    const {t} = useTranslation();

    const handleChange = (event, newValue) => {
        setValue(newValue);
        history.push('/' + newValue);
    };

    return (
        <span>
        {userInfo.isLoggedIn ?
            <BottomNavigation
                value={value}
                onChange={handleChange}
                classes={{
                    root: componentClasses.root,
                }}>
                <BottomNavigationAction label={t('community')} value="community"
                                        icon={<Home htmlColor="white"/>}
                                        classes={{
                                            selected: componentClasses.selected
                                        }}/>
                {/*<BottomNavigationAction label={t('dashboard')} value="dashboard"*/}
                {/*                        icon={<Dashboard htmlColor="white"/>}*/}
                {/*                        classes={{*/}
                {/*                            selected: componentClasses.selected*/}
                {/*                        }}/>*/}
                {/*<BottomNavigationAction label={t('friends')} value="friends"*/}
                {/*                        icon={<Group htmlColor="white"/>}*/}
                {/*                        classes={{*/}
                {/*                            selected: componentClasses.selected*/}
                {/*                        }}/>*/}
                <BottomNavigationAction label={t('add-match')} value="addMatch"
                                        icon={<AddCircleOutline fontSize="medium" htmlColor="white"/>}
                                        classes={{
                                            selected: componentClasses.selected
                                        }}/>
                <BottomNavigationAction label={t('my-profile')} value={`profile/${userInfo.uid}`}
                                        icon={<AccountCircle htmlColor="white"/>}
                                        classes={{
                                            selected: componentClasses.selected
                                        }}/>

            </BottomNavigation>
            :
            <BottomNavigation classes={{root: componentClasses.root}}/>
        }
        </span>
    )
};

export default withRouter(Footer);
