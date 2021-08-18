import React from 'react';
import useStyles from './css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withRouter } from 'react-router-dom/cjs/react-router-dom';
import UserAvatar from '../../components/UserAvatar';

const Profile = () => {
  const componentClasses = useStyles();

  return (
    <div className={componentClasses.root}>
      <Paper className={componentClasses.paper}>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <UserAvatar showName={false}/>
        </Grid>
      </Paper>
    </div>
  );
};

export default withRouter(Profile);
