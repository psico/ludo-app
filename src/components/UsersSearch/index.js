import React from 'react';
import useStyles from '../ProfileInfo/css';
import Paper from '@material-ui/core/Paper';
import { withRouter } from 'react-router-dom/cjs/react-router-dom';
import Grid from '@material-ui/core/Grid';
import UserAvatar from '../UserAvatar';

const UsersSearch = () => {
  const componentClasses = useStyles();

  return (
    <Paper className={componentClasses.paper}>
      <h2>Users Search</h2>
      <Grid container>
        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
          <UserAvatar
            photoURL="https://lh6.googleusercontent.com/-6tboY56uBbQ/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJNh23LmB2ElsqSlf7PDZ9kmTvaehQ/photo.jpg"
            displayName="João Gabriel" showName={false}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default withRouter(UsersSearch);
