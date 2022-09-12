import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import UserAvatar from '../UserAvatar';
import PersonAvatar from '../PersonAvatar';
import Comments from '../Comments';
import Like from '../Like';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import ShareIcon from '@material-ui/icons/Share';
import CommentInput from '../CommentInput';
import React, { useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import useStyles from '../../page/ShowMatch/css';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';

const Match = ({data, refetch, history }) => {
  const defaultImg = 'https://s3-us-west-1.amazonaws.com/5cc.images/games/empty+box.jpg';
  const componentClasses = useStyles();
  const { t } = useTranslation();

  return (
    <Paper className={componentClasses.paper} key={'community_' + data?.match?.matchOwner?.uid}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
            className={componentClasses.item}
            container
            spacing={0}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          {data?.match?.game ? data?.match.game.name : ''}
        </Grid>
        <Grid container className={componentClasses.hLine}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <div onClick={() => {
              history.push('/profile/' + data?.match?.matchOwner?.uid);
            }}>
              <UserAvatar photoURL={data?.match?.matchOwner?.photoURL} displayName={data?.match?.matchOwner?.name}
                          showName={true}/>
              {/*<PersonAvatar displayName={data?.match.uid} showName={true}/>*/}
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6} container>
            {
              data?.match.players &&
              data?.match.players.map((player, index) =>
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
            <img src={data?.match.game.imageUrl || defaultImg} alt={t('logo-ludoapp')} height="300"/>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Grid container spacing={0} item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Comments arrComments={data?.match.comments}/>
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
            <Like idDoc={useParams().id} likes={data?.match.likes}/>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
            <ShareIcon onClick={() => {
              navigator.share({
                title: 'MDN',
                text: 'Aprenda desenvolvimento web no MDN!',
                url: 'https://developer.mozilla.org',
              }).then(() => null);
            }}/> Share
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <CommentInput matchId={useParams().id} refreshUseQuery={refreshUseQuery}/>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default withRouter(Match);
