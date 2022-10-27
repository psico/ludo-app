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

  return (
    <Paper className={componentClasses.paper}>
      <h2>Matches Search</h2>
      <Grid container>
        {data?.matches?.length > 0 ?
          data.matches.map((value) =>
            <Grid key={value.idDoc} item xs={3} sm={3} md={3} lg={3} xl={3} className={componentClasses.gridStyle}>
              <p><strong>{t("game")}</strong>: {value.game.name}</p>
              <img src={value.game.imageUrl}
                   alt={value.game.name}
                   height="80"/>
              <UserAvatar
                photoURL={value.matchOwner?.photoURL}
                displayName={value.matchOwner?.name}
                showName={true}
              />
              <div><strong>{t("match-date")}</strong>: {(new Date(value.createdAt._seconds * 1000)).toLocaleString()}</div>
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
