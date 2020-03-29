import {
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
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
    }
}));

export default useStyles;
