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
        maxWidth: "921px",
        margin: 0,
        paddingTop: "115px",
        paddingBottom: "50px",
        fontFamily: "sans-serif",
        background: "#dfdfdf",
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center'
    },
    item: {
        paddingBottom: "10px"
    },
    vLine: {
        borderRight: "1px solid #eee",
        padding: "5px"
    },
    hLine: {
        borderBottom: "1px solid #eee",
        padding: "5px"
    }
}));

export default useStyles;
