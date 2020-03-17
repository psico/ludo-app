import React from "react";
import style from "./header.css";

const Header = () => (
    <div>
        <LogoHeader/>
        <InfoHeader/>
    </div>
);

const LogoHeader = () => (
    <div className={style.logoHeader}>
        Logo Header
    </div>
);

const InfoHeader = () => (
    <div>
        Info header
    </div>
);

export default Header;
