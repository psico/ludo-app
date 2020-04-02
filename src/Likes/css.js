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
    icon: {
        textAlign: 'left',
        paddingTop: "7px"
    },
    item: {
        textAlign: 'left'
    }
}));

export default useStyles;
