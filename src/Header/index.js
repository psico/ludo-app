import React from "react";
import "./header.css";

const Header = () => (
    <div>
        <LogoHeader/>
        <InfoHeader/>
    </div>
);

const LogoHeader = () => (
    <div className="logoHeader">
        Logo Header<br />
        Logo Header
    </div>
);

const InfoHeader = () => (
    <div className="infoHeader">
        Info header
    </div>
);

export default Header;
