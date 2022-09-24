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
  },
  vLine: {
    borderRight: '1px solid #eee',
    padding: '5px'
  },
  hLine: {
    borderBottom: '1px solid #eee',
    padding: '5px'
  }
}));

export default useStyles;
