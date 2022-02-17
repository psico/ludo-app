import React from 'react';
import useStyles from '../ProfileInfo/css';
import Paper from '@material-ui/core/Paper';
import { useParams, withRouter } from 'react-router-dom/cjs/react-router-dom';
import Grid from '@material-ui/core/Grid';
import UserAvatar from '../UserAvatar';
import { gql, useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';

const graphql = gql`
query matches($textSearch: String) {
  matches(uid: null, textSearch: $textSearch) {
    idDoc
    matchOwner {
      uid
      name
      photoURL
    }
    gameMoment
    game {
      name
      objectId
      description
      imageUrl
    }
  }
}
`;

const MatchesSearch = () => {
  const componentClasses = useStyles();
  const { t } = useTranslation();
  const {
    data,
    refetch,
    loading
  } = useQuery(graphql, {
    variables: { textSearch: useParams().search }
  });
  console.log("data => ", data);

  return (
    <Paper className={componentClasses.paper}>
      <h2>Matches Search</h2>
      <Grid container>
        {data?.length > 0 ?
          data.matches.map((value, index) =>
            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
              <img src={value.game.imageUrl}
                   alt={value.game.name}
                   height="80"/>
              <p>{value.game.name}</p>
              <UserAvatar
                photoURL={value.matchOwner?.photoURL}
                displayName={value.matchOwner?.name}
                showName={true}
              />
            </Grid>
          ) :
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <p>{t('no-results')}</p>
          </Grid>
        }
      </Grid>
    </Paper>
  );
};

export default withRouter(MatchesSearch);
