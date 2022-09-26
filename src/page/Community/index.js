import React, { useCallback, useEffect } from 'react';
import useStyles from './css';
import { useQuery, gql } from '@apollo/client';
import Match from '../../components/Match';

const graphql = gql`
    query matches{
        matches {
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
                comment
                photoURL
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

function Community () {
  const componentClasses = useStyles();
  const {
    data,
    refetch
  } = useQuery(graphql);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const refreshUseQuery = useCallback(async () => {
    await refetch();
  });

  useEffect(() => {
    refreshUseQuery().then(() => {
    });
  }, [refreshUseQuery]);

  return (
    <div className={componentClasses.root}>
      {data && data.matches.map((value) => <Match refreshUseQuery={refreshUseQuery} matchData={value}/>)}
    </div>
  );
}

export default Community;
