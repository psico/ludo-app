import React, { useCallback, useEffect } from 'react';
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
import Match from '../../components/Match';

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

const ShowMatch = ({ history }) => {
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
  console.log('data 1 ==> ', data?.match);

  return (
    <Match refreshUseQuery={refreshUseQuery} matchData={data?.match} />
  );
};

export default withRouter(ShowMatch);
