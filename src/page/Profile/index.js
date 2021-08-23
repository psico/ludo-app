import React, { useContext } from 'react';
import useStyles from './css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withRouter } from 'react-router-dom/cjs/react-router-dom';
import { AuthContext } from '../../App';
import Avatar from '@material-ui/core/Avatar';
import { Button } from '@material-ui/core';
import lvl from '../../temp-images/lvl-coronel.png';
import xp from '../../temp-images/experience.png';
import { useTranslation } from 'react-i18next';
import { lighten, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const Profile = () => {
  const componentClasses = useStyles();
  const { userInfo } = useContext(AuthContext);
  const { t } = useTranslation();

  const BorderLinearProgress = withStyles({
    root: {
      height: 10,
      borderRadius: 2,
      backgroundColor: lighten('#ff6c5c', 0.5),
    },
    bar: {
      borderRadius: 3,
      backgroundColor: '#ff6c5c',
    },
  })(LinearProgress);

  return (
    <div className={componentClasses.root}>
      <Paper className={componentClasses.paper}>
        <Grid container>
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
            <Avatar variant="rounded" alt={userInfo.displayName} src={userInfo.photoURL}/>
            <text>{userInfo.displayName}</text>
            <div>
              <Button variant="contained">Follow</Button>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
            <div>
              <img src={lvl} alt={t('user-level')} height="25"/>
              <text>{t('colonel')}</text>
            </div>
            <div>
              <img src={xp} alt={t('experience')} height="25"/>
              <text>Level 30 - Dice Explorer {userInfo.isLoggedIn}</text>
              <BorderLinearProgress
                className={componentClasses.margin}
                variant="determinate"
                color="secondary"
                value={30}
              />
            </div>
            <div>
              <Grid container>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                  <div>{t('matches')}</div>
                  <div>7</div>
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                  <div>{t('following')}</div>
                  <div>5</div>
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                  <div>{t('followers')}</div>
                  <div>3</div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={componentClasses.paper}>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <h2>{t('last-matches')}</h2>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={componentClasses.paper}>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <h2>{t('most-played')}</h2>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default withRouter(Profile);
