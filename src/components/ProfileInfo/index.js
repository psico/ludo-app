import useStyles from './css';
import { useParams, withRouter } from 'react-router-dom/cjs/react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import lvl from '../../temp-images/lvl-coronel.png';
import xp from '../../temp-images/experience.png';
import React, { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { lighten, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { AuthContext } from '../../App';
import { gql, useMutation, useQuery } from '@apollo/client';
import UserAvatar from '../UserAvatar';

const graphqlFollowUser = gql`
mutation follow($followUid: ID!) {
  follow(followUid: $followUid) {
    uid,
    name
  }
}
`;

const graphql = gql`
    query userExperienceInfo($uid: ID!){
        userExperienceInfo(uid: $uid) {
            totalExperience
            level
            nextLevelExperience
        }
    }
`;

const ProfileInfo = ({
  userInfo: userProfileInfoData,
  photoURL
}) => {
  const componentClasses = useStyles();
  const { userInfo } = useContext(AuthContext);
  const { t } = useTranslation();
  const [completed, setCompleted] = React.useState(0);
  const [follow] = useMutation(graphqlFollowUser, {
    variables: { followUid: useParams().id }
  });

  const { data } = useQuery(graphql, {
    variables: { uid: userProfileInfoData?.uid || "" }
  });

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

  const followCondicional = () => {
    const followed = userProfileInfoData.followers.some((follower) => follower.uid === userInfo?.uid);

    return userInfo?.uid === userProfileInfoData?.uid || followed;
  }

  const toFollow = (followUid) => {
    follow({
      variables: {
        followUid: followUid
      }
    }).then((result)=> {
      if (result.data.follow) {
        window.location.reload();
      }
    })
      .catch((error) => {
        console.log('error to follow => ', error);
      });

    return undefined;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const calculatePercentBar = (() => {
    setCompleted((100*data?.userExperienceInfo?.nextLevelExperience)/data?.userExperienceInfo?.totalExperience);
  });

  useEffect(() => {
    calculatePercentBar();
  },[calculatePercentBar,data]);

  return (
    <Paper className={componentClasses.paper}>
      {userProfileInfoData ?
        <Grid container>

          <Grid item xs={3} sm={3} md={3} lg={3} xl={3} className={componentClasses.item}>
            <UserAvatar displayName={userProfileInfoData?.name} photoURL={photoURL} showName={false} photoSize="large"/>
            <div className={componentClasses.grider}>{userProfileInfoData?.name}</div>
            <Button variant="contained" disabled={followCondicional()}
                    onClick={() => toFollow(userProfileInfoData?.uid)}>{t('follow')}</Button>
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
                <div>Level {data?.userExperienceInfo?.level} - Dice Explorer {userInfo.isLoggedIn}</div>
                <BorderLinearProgress
                  variant="determinate"
                  color="secondary"
                  value={completed}
                />
              </Grid>
            </Grid>

            <Grid container className={componentClasses.grider}>
              <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <div style={{ textAlign: 'center' }}>{t('matches')}</div>
                <div style={{ textAlign: 'center' }}>{userProfileInfoData.numberOfMatches}</div>
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <div style={{ textAlign: 'center' }}>{t('following')}</div>
                <div style={{ textAlign: 'center' }}>{userProfileInfoData.following.length}</div>
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <div style={{ textAlign: 'center' }}>{t('followers')}</div>
                <div style={{ textAlign: 'center' }}>{userProfileInfoData.followers.length}</div>
              </Grid>
            </Grid>
          </Grid>

        </Grid>
        : <h5>{t('nothing-to-show')}</h5>}
    </Paper>
  );
};

export default withRouter(ProfileInfo);
