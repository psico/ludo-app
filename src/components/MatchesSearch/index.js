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
    createdAt
  }
}
`;

const MatchesSearch = () => {
  const componentClasses = useStyles();
  const { t } = useTranslation();
  const {
    data
  } = useQuery(graphql, {
    variables: { textSearch: useParams().search }
  });

  const formatDate = (timestamp) => {
    return Date(timestamp).toLocaleString();
  }

  return (
    <Paper className={componentClasses.paper}>
      <h2>Matches Search</h2>
      <Grid container>
        {data?.matches?.length > 0 ?
          data.matches.map((value) =>
            <Grid key={value.idDoc} item xs={2} sm={2} md={2} lg={2} xl={2}>
              <img src={value.game.imageUrl}
                   alt={value.game.name}
                   height="80"/>
              <p><strong>{t("game")}</strong>: {value.game.name}</p>
              <p><strong>{t("match-date")}</strong>: {(new Date(value.createdAt._seconds * 1000)).toLocaleString()}</p>
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
