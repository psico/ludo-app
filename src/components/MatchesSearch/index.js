import React from 'react';
import useStyles from '../ProfileInfo/css';
import Paper from '@material-ui/core/Paper';
import { withRouter } from 'react-router-dom/cjs/react-router-dom';

const MatchesSearch = () => {
  const componentClasses = useStyles();

  return <Paper className={componentClasses.paper}>MatchesSearch</Paper>
}

export default withRouter(MatchesSearch);
