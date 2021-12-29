import React from 'react';
import useStyles from './css';
import { withRouter, useParams } from 'react-router-dom/cjs/react-router-dom';
import { useQuery, gql } from '@apollo/client';
import ProfileInfo from '../../components/ProfileInfo';
import LastMatches from '../../components/LastMatches';

const graphqlUserInfo = gql`
  query userInfo($uid: ID!) {
    userInfo(uid: $uid) {
      uid
      name
      numberOfMatches
      following {
        uid
        name
      }
      followers {
        uid
        name
      }
      friends {
        uid
        name
      }
    }
    
    matches(uid: $uid) {
      idDoc
      gameMoment
      createdAt
      game {
        name
        objectId
        yearPublished
        description
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
        friends {
          uid
          name
        }
        numberOfMatches
        following {
          uid
          name
        }
        followers {
          uid
          name
        }
      }
    }
  }
`;

const Profile = () => {
  const componentClasses = useStyles();
  const { data } = useQuery(graphqlUserInfo, {
    variables: { uid: useParams().id }
  });
console.log("data ==> ", data);
  return (
    <div className={componentClasses.root}>
      <ProfileInfo userInfo={data?.userInfo}
                   photoURL={data?.userInfo.photoURL}
                   showName={data?.userInfo.showName}>

      </ProfileInfo>
      <LastMatches matches={data?.matches}/>
    </div>
  );
};

export default withRouter(Profile);
