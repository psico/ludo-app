import React from 'react';
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

const Match = () => {
  const componentClasses = useStyles();
  const { t } = useTranslation();

  const { data } = useQuery(graphqlUserInfo, {
    variables: { idDoc: useParams().id }
  });
  console.log('data ==> ', data?.getMatch, data?.match[0]);

  return (
    <Paper className={componentClasses.paper} key={'community_' + index}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
            className={componentClasses.item}
            container
            spacing={0}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          {data?.match[0].game ? data?.match[0].game.name : ''}
        </Grid>
        <Grid container className={componentClasses.hLine}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <div onClick={() => {
              history.push('/profile/' + data?.match[0]?.matchOwner?.uid);
            }}>
              <UserAvatar photoURL={data?.match[0]?.matchOwner?.photoURL} displayName={data?.match[0]?.matchOwner?.name}
                          showName={true}/>
              {/*<PersonAvatar displayName={data?.match[0].uid} showName={true}/>*/}
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6} container>
            {
              data?.match[0].players &&
              data?.match[0].players.map((player, index) =>
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
            <img src={data?.match[0].game.imageUrl || defaultImg} alt={t('logo-ludoapp')} height="300"/>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Grid container spacing={0} item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Comments arrComments={data?.match[0].comments}/>
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
            <Like idDoc={data?.match[0].idDoc} likes={data?.match[0].likes}/>
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
            <CommentInput matchId={data?.match[0].idDoc} refreshUseQuery={refreshUseQuery}/>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default withRouter(Match);
