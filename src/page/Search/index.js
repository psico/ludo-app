import React from 'react';
import { withRouter } from 'react-router-dom/cjs/react-router-dom';
import useStyles from '../Profile/css';
import MatchesSearch from '../../components/MatchesSearch';

const Search = () => {
  const componentClasses = useStyles();

  return (
    <div className={componentClasses.root}>
      <MatchesSearch />
    </div>
)
}

export default withRouter(Search);
