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
        <Grid container>
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
            <Avatar variant="rounded" alt={userInfo.displayName} src={userInfo.photoURL} />
            <text>{userInfo.displayName}</text>
            <div>
              <Button variant="contained" >Follow</Button>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
            <Avatar variant="rounded" alt={userInfo.displayName} src={userInfo.photoURL} />
            <text>{userInfo.displayName}</text>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default withRouter(Profile);
