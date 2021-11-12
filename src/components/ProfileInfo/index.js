import useStyles from './css';
import { withRouter } from 'react-router-dom/cjs/react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import { Button } from '@material-ui/core';
import lvl from '../../temp-images/lvl-coronel.png';
import xp from '../../temp-images/experience.png';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { lighten, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { AuthContext } from '../../App';


const ProfileInfo = ({
  userInfo: userInfoData,
  photoURL
}) => {
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
  console.log("userInfoData => ", userInfoData);
  console.log("userInfo => ", userInfo);

  function followCondicional() {
    if (userInfo?.uid === userInfoData?.uid) {
      return "true";
    }

    return "";
  }

  return (
    <Paper className={componentClasses.paper}>
      {userInfoData ?
        <Grid container>

          <Grid item xs={3} sm={3} md={3} lg={3} xl={3} className={componentClasses.item}>
            <Avatar variant="rounded" alt={userInfoData?.name} src={photoURL} className={componentClasses.avatar}/>
            <div className={componentClasses.grider}>{userInfoData?.name}</div>
            <Button variant="contained" disabled={followCondicional()}>{t('follow')}</Button>
          </Grid>

          <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
            <Grid container className={componentClasses.grider}>
              <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                <img src={lvl} alt={t('user-level')} height="25"/>
              </Grid>
              <Grid item xs={11} sm={11} md={11} lg={11} xl={11}>
                <div>{t('colonel')}</div>
              </Grid>
            </Grid>
            <Grid container className={componentClasses.grider}>
              <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                <img src={xp} alt={t('experience')} height="25"/>
              </Grid>
              <Grid item xs={11} sm={11} md={11} lg={11} xl={11}>
                <div>Level 30 - Dice Explorer</div>
                <BorderLinearProgress
                  variant="determinate"
                  color="secondary"
                  value={30}
                />
              </Grid>
            </Grid>

            <Grid container className={componentClasses.grider}>
              <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <div style={{ textAlign: 'center' }}>{t('matches')}</div>
                <div style={{ textAlign: 'center' }}>{userInfoData.numberOfMatches}</div>
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <div style={{ textAlign: 'center' }}>{t('following')}</div>
                <div style={{ textAlign: 'center' }}>{userInfoData.following.length}</div>
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <div style={{ textAlign: 'center' }}>{t('followers')}</div>
                <div style={{ textAlign: 'center' }}>{userInfoData.followers.length}</div>
              </Grid>
            </Grid>
          </Grid>

        </Grid>
      : null}
    </Paper>
  );
};

export default withRouter(ProfileInfo);
