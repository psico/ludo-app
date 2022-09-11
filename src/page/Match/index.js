import React, { useCallback } from 'react';
import useStyles from './css';
import { withRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import UserAvatar from '../../components/UserAvatar';
import PersonAvatar from '../../components/PersonAvatar';
import Comments from '../../components/Comments';
import Like from '../../components/Like';
import ShareIcon from '@material-ui/icons/Share';
import CommentInput from '../../components/CommentInput';

const graphqlUserInfo = gql`
query getMatch($idDoc: String!) {
  match(idDoc: $idDoc) {
    idDoc
    matchOwner {
      uid
      name
      photoURL
    }
    gameMoment
    game {
      name
      imageUrl
    }
    comments {
      uid
      name
      photoURL
      comment
    }
    players {
      uid
      name
      photoURL
    }
    
  }
}
`;

const Match = ({ history }) => {
  const defaultImg = 'https://s3-us-west-1.amazonaws.com/5cc.images/games/empty+box.jpg';
  const componentClasses = useStyles();
  const { t } = useTranslation();

  const { data, refetch } = useQuery(graphqlUserInfo, {
    variables: { idDoc: useParams().id }
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const refreshUseQuery = useCallback(async () => {
    await refetch();
  });
  console.log('data ==> ', data?.match, data?.match?.gameMoment);

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
              }).then(() => null)
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
