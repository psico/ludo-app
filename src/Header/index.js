import React from "react";
import "./header.css";
import {
    AppBar,
    Toolbar,
    useScrollTrigger,
    Slide,
    IconButton,
    Typography,
    InputBase,
    fade,
    makeStyles
} from '@material-ui/core';
import {Menu as MenuIcon, Search as SearchIcon} from '@material-ui/icons';
import logo from './ludo192.png';

console.log(logo);

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

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

const InfoHeader = () => (
    <div className="infoHeader">
        Info header
    </div>
);


export default Header;
