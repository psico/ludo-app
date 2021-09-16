import React from 'react';
import useStyles from './css';
import { useTranslation } from 'react-i18next';
import { Paper } from '@material-ui/core';
import { withRouter } from 'react-router-dom/cjs/react-router-dom';

const LastMatches = () => {
  const componentClasses = useStyles();
  const { t } = useTranslation();

  return (
    <Paper className={componentClasses.paper}>
      <p>{t('last-matches')}</p>
    </Paper>
  );
}

export default withRouter(LastMatches);
