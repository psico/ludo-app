import React from 'react';
import useStyles from './css';
import { useTranslation } from 'react-i18next';
import { Paper } from '@material-ui/core';
import { withRouter } from 'react-router-dom/cjs/react-router-dom';
import Grid from '@material-ui/core/Grid';

const LastMatches = ({ matches }) => {
  const defaultImg = 'https://s3-us-west-1.amazonaws.com/5cc.images/games/empty+box.jpg';
  const componentClasses = useStyles();
  const { t } = useTranslation();

  return (
    <Paper className={componentClasses.paper}>
      <h2>{t('last-matches')}</h2>
      <Grid container>
      {
        matches ? matches.map((match) =>
            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
              <p>{match.game.name}</p>
              <img src={match.game.imageUrl || defaultImg }
                   alt={match.game.name} height="80"/>
            </Grid>
          )
          :
          <div>{t('no-data')}</div>
      }
      </Grid>
    </Paper>
  );
};

export default withRouter(LastMatches);
