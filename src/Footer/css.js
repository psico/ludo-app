import {
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        justifyContent: "center",
        background: "#3f51b5"
    },
    selected: {
        color: "#ffffff"
    }
}));

export default useStyles;
