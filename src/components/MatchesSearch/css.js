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
  gridStyle: {
    paddingBottom: "30px"
  },
  textDate: {
    fontFamily: "sans-serif",
    fontSize: "12px",
    paddingLeft: "8px",
  }
}));

export default useStyles;
