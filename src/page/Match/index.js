import React from 'react';
import useStyles from './css';
import { withRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import Paper from '@material-ui/core/Paper';

const graphqlUserInfo = gql`
query getMatch($idDoc: ID!) {
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
  console.log('data ==> ', data);

  return (
    <Paper className={componentClasses.paper}>
      {data ?
        <div className={componentClasses.root}>
          Match
        </div>
        : <h5>{t('nothing-to-show')}</h5>}
    </Paper>
  );
};

export default withRouter(Match);
