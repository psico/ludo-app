import React from "react";
import "./header.css";
import {AppBar, Toolbar, useScrollTrigger, Slide} from '@material-ui/core';

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

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
        <AppBar position="static">
            <Toolbar>
                Logo Header<br/>
                Logo Header
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
