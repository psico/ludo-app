import React, { useContext } from 'react';
import useStyles from './css';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
import { withRouter, useParams } from 'react-router-dom/cjs/react-router-dom';
import { AuthContext } from '../../App';
import { useTranslation } from 'react-i18next';
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
      uid
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
  // const { t } = useTranslation();
  const { data } = useQuery(graphqlUserInfo, {
    variables: { uid: useParams().id }
  });

  return (
    <div className={componentClasses.root}>
      <ProfileInfo userInfo={data?.userInfo}
                   photoURL={data?.userInfo.photoURL}
                   showName={data?.userInfo.showName}>

      </ProfileInfo>
      <LastMatches matches={data?.matches}></LastMatches>
      {/*<Paper className={componentClasses.paper}>*/}
      {/*  <Grid container>*/}
      {/*    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>*/}
      {/*      <h2>{t('most-played')}</h2>*/}
      {/*    </Grid>*/}
      {/*  </Grid>*/}
      {/*</Paper>*/}
    </div>
  );
};

export default withRouter(Profile);
