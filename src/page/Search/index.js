import React from 'react';
import { withRouter } from 'react-router-dom/cjs/react-router-dom';
import useStyles from '../Profile/css';
import MatchesSearch from '../../components/MatchesSearch';
import UsersSearch from '../../components/UsersSearch';

const Search = () => {
  const componentClasses = useStyles();

  return (
    <div className={componentClasses.root}>
      <MatchesSearch />
      <UsersSearch />
    </div>
)
}

export default withRouter(Search);
