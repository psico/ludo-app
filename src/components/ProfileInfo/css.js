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
    fontFamily: "sans-serif"
  },
  paper: {
    padding: theme.spacing(1),
    marginBottom: "15px",
    textAlign: 'left',
    width: "921px"
  },
  item: {
    textAlign: 'center',
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: '10px'
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  }
}));

export default useStyles;
