import React, { useContext } from 'react';
import useStyles from './css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withRouter } from 'react-router-dom/cjs/react-router-dom';
import { AuthContext } from '../../App';
import Avatar from '@material-ui/core/Avatar';
import { Button } from '@material-ui/core';

const Profile = () => {
  const componentClasses = useStyles();
  const {userInfo} = useContext(AuthContext);

  return (
    <div className={componentClasses.root}>
      <Paper className={componentClasses.paper}>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Avatar variant="circle" alt={userInfo.displayName} src={userInfo.photoURL} />
          <text>{userInfo.displayName}</text>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Button variant="contained" >Follow</Button>
        </Grid>
      </Paper>
    </div>
  );
};

export default withRouter(Profile);
