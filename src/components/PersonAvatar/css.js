import {
    makeStyles
} from '@material-ui/core';

const componentStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        margin: theme.spacing(1)
    },
    textAvatar: {
        paddingLeft: "5px",
        fontSize: "12px",
        fontWeight: "bold",
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    medium: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
}));

export default componentStyles;
