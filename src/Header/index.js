import React from "react";
import useStyles from "./styledComponent";
import {
    AppBar,
    Toolbar,
    useScrollTrigger,
    Slide,
    IconButton,
    Typography,
    InputBase
} from '@material-ui/core';
import {Search as SearchIcon} from '@material-ui/icons';
import logo from './ludo192.png';

console.log(logo);

const Header = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.infoHeader}>
            <LogoHeader {...props}/>
            <InfoHeader/>
        </div>
    );
};

const LogoHeader = (props) => {
    const classes = useStyles();

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
                        <img src={logo} alt="logo ludoApp" height="40"/>
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        LudoApp
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{'aria-label': 'search'}}
                        />
                    </div>
                    <div className={classes.grow}/>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    )
};

const InfoHeader = () => {
    return (
        <div>
            <div>Info header</div>Info header
        </div>
    );
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

export default Header;
