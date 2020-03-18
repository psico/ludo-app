import React from "react";
import "./header.css";
import {AppBar, Toolbar, useScrollTrigger, Slide, IconButton, Typography, InputBase} from '@material-ui/core';
import {Menu as MenuIcon, Search as SearchIcon} from '@material-ui/icons';
import logo from '../ludo192.png';

console.log(logo);

const HideOnScroll = (props) => {
    const {children, window} = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({target: window ? window() : undefined});

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const Header = (props) => (
    <div>
        <LogoHeader {...props}/>
        <InfoHeader/>
    </div>
);

const LogoHeader = (props) => (
    <HideOnScroll {...props}>
        <AppBar>
            <Toolbar>
                <IconButton
                    edge="start"
                    className=""
                    color="inherit"
                    aria-label="open drawer"
                >
                    <img src={logo} alt="logo ludoApp" height="40"/>
                </IconButton>
                <Typography className="" variant="h6" noWrap>
                    LudoApp
                </Typography>
                <div className="">
                    <div className="">
                        <SearchIcon/>
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes=""
                        inputProps={{'aria-label': 'search'}}
                    />
                </div>
                <div className=""/>
            </Toolbar>
        </AppBar>
    </HideOnScroll>
);

const InfoHeader = () => (
    <div className="infoHeader">
        Info header
    </div>
);


export default Header;
