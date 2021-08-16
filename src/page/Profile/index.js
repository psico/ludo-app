import React from 'react';
import useStyles from './css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withRouter } from 'react-router-dom/cjs/react-router-dom';

const Profile = () => {
  const componentClasses = useStyles();

  return (
    <div className={componentClasses.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={componentClasses.item}>
          <Paper className={componentClasses.paper}>
            <Grid container spacing={0}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <h1>Hello profile</h1>
               </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default withRouter(Profile);
