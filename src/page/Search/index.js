import React from 'react';
import { withRouter } from 'react-router-dom/cjs/react-router-dom';
import useStyles from '../Profile/css';

const Search = () => {
  const componentClasses = useStyles();

  return <div className={componentClasses.root}>Search</div>
}

export default withRouter(Search);
