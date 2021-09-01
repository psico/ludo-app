import {
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1),
    marginBottom: "15px",
    textAlign: 'left',
    width: "921px"
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "sans-serif"
  },
  grider: {
    marginBottom: "15px"
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    marginBottom: "15px"
  }
}));

export default useStyles;
