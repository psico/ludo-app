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
        width: "100%",
        margin: 0,
        fontFamily: "sans-serif"
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        width: "921px"
    },
    item: {
        textAlign: 'left',
        alignItems: "center",
        paddingBottom: '10px'
    }
}));

export default useStyles;
