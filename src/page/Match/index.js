import React from 'react';
import useStyles from './css';
import { withRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
  console.log('data ==> ', data?.getMatch, data?.match);

  return (
    <Paper className={componentClasses.paper}>
      <Grid container>
        {data ?
          <div className={componentClasses.root}>
            Match
          </div>
          : <h5>{t('nothing-to-show')}</h5>}
      </Grid>
    </Paper>
  );
};

export default withRouter(Match);
