import React, { useCallback } from 'react';
import useStyles from './css';
import { withRouter } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
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
    likes {
        uid
        name            
    }
    
  }
}
`;

const ShowMatch = () => {
  const componentClasses = useStyles();

  const {
    data,
    refetch
  } = useQuery(graphqlUserInfo, {
    variables: { idDoc: useParams().id }
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const refreshUseQuery = useCallback(async () => {
    await refetch();
  });

  return (
    <div className={componentClasses.root}>
      <Match refreshUseQuery={refreshUseQuery} matchData={data?.match}/>
    </div>
  );
};

export default withRouter(ShowMatch);
