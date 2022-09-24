import {
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1),
    marginBottom: '15px',
    textAlign: 'center'
  },
  item: {
    paddingBottom: '10px'
  }
}));

export default useStyles;
