import {
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        width: "100%",
        maxWidth: "921px",
        margin: 0,
        paddingTop: "115px",
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
    vl: {
        borderRight: "1px solid gray",
    }
}));

export default useStyles;
