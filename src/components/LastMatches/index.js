import React from 'react';
import useStyles from './css';
import { useTranslation } from 'react-i18next';
import { Paper } from '@material-ui/core';
import { withRouter } from 'react-router-dom/cjs/react-router-dom';

const LastMatches = ({ matches }) => {
  const componentClasses = useStyles();
  const { t } = useTranslation();
  console.log('matches ==> ', matches);

  return (
    <Paper className={componentClasses.paper}>
      <p>{t('last-matches')}</p>
      {
        matches ? matches.map((match) =>
            <div>
              <img src={match.game.imageUrl || 'https://s3-us-west-1.amazonaws.com/5cc.images/games/empty+box.jpg'}
                   alt={match.game.name} height="100"/>
            </div>
          )
          :
          <div>{t('no-data')}</div>
      }
    </Paper>
  );
};

export default withRouter(LastMatches);
