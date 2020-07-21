import {
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        margin: 0,
        fontFamily: "sans-serif",
        textAlign: 'left'
    },
    paper: {
        padding: theme.spacing(1)
    },
    item: {
        paddingBottom: "10px"
    }
}));

export default useStyles;
