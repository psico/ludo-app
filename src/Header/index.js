import React from "react";
import "./header.css";
import {AppBar, Toolbar} from '@material-ui/core';

const Header = () => (
    <div>
        <LogoHeader/>
        <InfoHeader/>
    </div>
);

const LogoHeader = () => (
    <AppBar position="static">
        <Toolbar>
            Logo Header<br/>
            Logo Header
        </Toolbar>
    </AppBar>
);

const InfoHeader = () => (
    <div className="infoHeader">
        Info header
    </div>
);

export default Header;
