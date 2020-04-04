import {
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: 0,
        fontFamily: "sans-serif",
        textAlign: 'left'
    },
    item: {
        textAlign: 'left'
    }
}));

export default useStyles;
