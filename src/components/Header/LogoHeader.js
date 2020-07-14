import componentStyles from "./css";
import {AppBar, IconButton, InputBase, Slide, Toolbar, Typography, useScrollTrigger} from "@material-ui/core";
import logo from "./ludo192.png";
import {Search as SearchIcon} from "@material-ui/icons";
import InfoHeader from "./InfoHeader";
import React, {useContext} from "react";
import {AuthContext} from "../../App";
import {useTranslation} from "react-i18next";

const LogoHeader = (props) => {
    const classes = componentStyles();
    const {t} = useTranslation();
    const {userInfo} = useContext(AuthContext);

    return (
        <HideOnScroll {...props}>
            <AppBar>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className=""
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <img src={logo} alt={t('logo-ludoapp')} height="40"/>
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        LudoApp
                    </Typography>
                    {userInfo.isLoggedIn ?
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                            <InputBase
                                placeholder={t('search...')}
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{'aria-label': 'search'}}
                            />
                        </div>
                        : <span/>
                    }
                    <div className={classes.grow}/>
                </Toolbar>
                <InfoHeader/>
            </AppBar>
        </HideOnScroll>
    )
};

const HideOnScroll = (props) => {
    const {children} = props;
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
};

export default LogoHeader;
