import componentStyles from "./css";
import {AppBar, IconButton, InputBase, Slide, Toolbar, Typography, useScrollTrigger} from "@material-ui/core";
import logo from "./ludo192.png";
import {Search as SearchIcon} from "@material-ui/icons";
import InfoHeader from "./InfoHeader";
import React, { useContext, useState } from 'react';
import {AuthContext} from "../../App";
import {useTranslation} from "react-i18next";
import { useHistory  } from "react-router-dom";

const LogoHeader = (props) => {
    const classes = componentStyles();
    const {t} = useTranslation();
    const {userInfo} = useContext(AuthContext);
    const [textSearch, setTextSearch] = useState(null);
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        history.push(`/search/${textSearch}`);
    }

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
                        <form className={classes.search} onSubmit={(event)=> handleSubmit(event)}>
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                            <InputBase
                                placeholder={t('search...')}
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                onChange={
                                (event) => {
                                    console.log("here => ", event.target.value);
                                    setTextSearch(event.target.value);
                                }
                            }
                                inputProps={{'aria-label': 'search'}}
                            />
                        </form>
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
