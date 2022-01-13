import React from 'react';
import useStyles from '../ProfileInfo/css';
import Paper from '@material-ui/core/Paper';
import { withRouter } from 'react-router-dom/cjs/react-router-dom';

const UsersSearch = () => {
  const componentClasses = useStyles();

  return (
    <Paper className={componentClasses.paper}>
      <h2>Users Search</h2>
    </Paper>
  );
};

export default withRouter(UsersSearch);
