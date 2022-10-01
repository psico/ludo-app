import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import UserAvatar from '../UserAvatar';
import PersonAvatar from '../PersonAvatar';
import Comments from '../Comments';
import Like from '../Like';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import ShareIcon from '@material-ui/icons/Share';
import CommentInput from '../CommentInput';
import React from 'react';
import { withRouter } from 'react-router-dom';
import useStyles from './css';
import { useTranslation } from 'react-i18next';

const Match = ({
  matchData,
  refreshUseQuery,
  history
}) => {
  const defaultImg = 'https://s3-us-west-1.amazonaws.com/5cc.images/games/empty+box.jpg';
  const componentClasses = useStyles();
  const { t } = useTranslation();

  return (
    <Paper className={componentClasses.paper} key={'match_' + matchData?.idDoc}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
            className={componentClasses.item}
            container
            spacing={0}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          {matchData?.game ? matchData?.game.name : ''}
        </Grid>
        <Grid container className={componentClasses.hLine}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <div onClick={() => {
              history.push('/profile/' + matchData?.matchOwner?.uid);
            }}>
              <UserAvatar photoURL={matchData?.matchOwner?.photoURL} displayName={matchData?.matchOwner?.name}
                          showName={true}/>
              {/*<PersonAvatar displayName={matchData?.uid} showName={true}/>*/}
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6} container>
            {
              matchData?.players &&
              matchData?.players.map((player, index) =>
                <PersonAvatar
                  key={'person_' + index}
                  displayName={player.name}
                  showName={false}/>
              )
            }
          </Grid>
        </Grid>
        <Grid container className={componentClasses.hLine}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <img src={matchData?.game.imageUrl || defaultImg} alt={t('logo-ludoapp')} height="300"/>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Grid container spacing={0} item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Comments arrComments={matchData?.comments}/>
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
            <Like idDoc={useParams().id} likes={matchData?.likes}/>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
            <ShareIcon onClick={() => {
              navigator.share({
                title: matchData.game ? matchData.game.name : '',
                text: matchData.game ? matchData.game.name : '',
                url: `./showMatch/${matchData?.idDoc}`,
              }).then(() => null);
            }}/> Share
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <CommentInput matchId={matchData?.idDoc} refreshUseQuery={refreshUseQuery}/>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default withRouter(Match);
