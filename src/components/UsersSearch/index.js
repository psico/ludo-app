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

const UsersSearch = () => {
  const componentClasses = useStyles();
  const {t} = useTranslation();
  const [completed] = React.useState(30);

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
        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
          <UserAvatar
            photoURL="https://lh6.googleusercontent.com/-6tboY56uBbQ/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJNh23LmB2ElsqSlf7PDZ9kmTvaehQ/photo.jpg"
            displayName="João Gabriel" showName={false}
          />
          <p>João Gabriel</p>
          <img src={lvl} alt={t('user-level')} height="25"/>
          <h5>
            <div>Level 30 - Dice Explorer {/** userInfo.isLoggedIn**/}</div>
            <BorderLinearProgress
              className={componentClasses.margin}
              variant="determinate"
              color="secondary"
              value={completed}
            />
          </h5>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default withRouter(UsersSearch);
