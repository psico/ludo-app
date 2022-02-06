import React from 'react';
import useStyles from '../ProfileInfo/css';
import Paper from '@material-ui/core/Paper';
import { withRouter } from 'react-router-dom/cjs/react-router-dom';
import Grid from '@material-ui/core/Grid';
import UserAvatar from '../UserAvatar';
import { gql, useQuery } from '@apollo/client';

const graphql = gql`
query matches{
  matches(uid: null, textSearch: "catan") {
    idDoc
    matchOwner {
      uid
      name
    }
    gameMoment
    game {
      name
      objectId
      description
    }
  }
}
`;

const MatchesSearch = () => {
  const componentClasses = useStyles();
  const {data, refetch, loading} = useQuery(graphql);

  return (
    <Paper className={componentClasses.paper}>
      <h2>Matches Search</h2>
      <Grid container>
        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>

          <img src="https://cdn.shopify.com/s/files/1/0513/4077/1515/products/catan-board-game.jpg?v=1609629082"
               alt="game" height="80"/>
          <p>game</p>
          <UserAvatar
            photoURL="https://lh6.googleusercontent.com/-6tboY56uBbQ/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJNh23LmB2ElsqSlf7PDZ9kmTvaehQ/photo.jpg"
            displayName="João Gabriel" showName={true}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default withRouter(MatchesSearch);
