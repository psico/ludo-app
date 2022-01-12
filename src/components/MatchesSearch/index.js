import React from 'react';
import useStyles from '../ProfileInfo/css';
import Paper from '@material-ui/core/Paper';
import { withRouter } from 'react-router-dom/cjs/react-router-dom';
import Grid from '@material-ui/core/Grid';

const MatchesSearch = () => {
  const componentClasses = useStyles();

  return (
    <Paper className={componentClasses.paper}>
      <h2>Matches Search</h2>
      <Grid container>
        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
          <p>game</p>
          <img src="https://cdn.shopify.com/s/files/1/0513/4077/1515/products/catan-board-game.jpg?v=1609629082"
               alt="game" height="80"/>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default withRouter(MatchesSearch);
