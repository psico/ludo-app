import React, { useContext } from 'react';
import useStyles from './css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withRouter } from 'react-router-dom/cjs/react-router-dom';
import { AuthContext } from '../../App';
import { useTranslation } from 'react-i18next';
import ProfileInfo from '../../components/ProfileInfo';
import {useQuery, gql} from "@apollo/client";

const graphql = gql`
  query userInfo {
    userInfo(uid: "0IhNFZFa7QMwBY6yZT8l24L1AX32") {
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
  }
`;

const Profile = () => {
  const componentClasses = useStyles();
  const { userInfo } = useContext(AuthContext);
  const { t } = useTranslation();
  const {data, refetch} = useQuery(graphql);

  return (
    <div className={componentClasses.root}>
      <ProfileInfo userInfo={data ? data.userInfo : null}
                   photoURL={userInfo.photoURL}
                   showName={userInfo.showName}>

      </ProfileInfo>
      <Paper className={componentClasses.paper}>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <h2>{t('last-matches')}</h2>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={componentClasses.paper}>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <h2>{t('most-played')}</h2>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default withRouter(Profile);
