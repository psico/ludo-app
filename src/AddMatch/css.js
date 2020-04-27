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
        fontFamily: "sans-serif",
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        width: "921px"
    },
    item: {
        textAlign: 'left',
        paddingBottom: '10px'
    },
    vl: {
        borderRight: "1px solid gray",
    }
}));

export default useStyles;
