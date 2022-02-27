import React from 'react';
import useStyles from '../ProfileInfo/css';
import Paper from '@material-ui/core/Paper';
import { withRouter } from 'react-router-dom/cjs/react-router-dom';
import Grid from '@material-ui/core/Grid';
import UserAvatar from '../UserAvatar';
import lvl from '../../temp-images/lvl-coronel.png';
import { lighten, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-apollo';
import { useParams } from 'react-router-dom';
import { gql } from '@apollo/client';

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
  }
}
`;

const UsersSearch = () => {
  const componentClasses = useStyles();
  const { t } = useTranslation();
  const [completed] = React.useState(30);
const {
    data
  } = useQuery(graphql, {
    variables: { textSearch: useParams().search }
  });

  const BorderLinearProgress = withStyles({
    root: {
      height: 10,
      borderRadius: 2,
      backgroundColor: lighten('#ff6c5c', 0.5),
    },
    bar: {
      borderRadius: 3,
      backgroundColor: '#ff6c5c',
    },
  })(LinearProgress);

  return (
    <Paper className={componentClasses.paper}>
      <h2>Users Search</h2>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <UserAvatar
            photoURL="https://lh6.googleusercontent.com/-6tboY56uBbQ/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJNh23LmB2ElsqSlf7PDZ9kmTvaehQ/photo.jpg"
            displayName="João Gabriel" showName={false}
          />
          <p>João Gabriel</p>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <img src={lvl} alt={t('user-level')} height="25"/>
          <span>Level 30 - Dice Explorer {/** userInfo.isLoggedIn**/}
          <BorderLinearProgress
            className={componentClasses.margin}
            variant="determinate"
            color="secondary"
            value={completed}
          />
            </span>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default withRouter(UsersSearch);
