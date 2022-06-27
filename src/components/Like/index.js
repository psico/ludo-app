import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import { gql, useMutation } from '@apollo/client';

const graphql = gql`
    mutation likeIt {
        likeIt(idDoc: "G8Qiso06m9Gw94NtvQ33") {
            idDoc
            createdAt
          }
    }
`;

const Like = () => {
  const [atLeastOneLike] = useState(false);
  const [likeIt] = useMutation(graphql);
  const likeAction = () => alert('like it');

  return <div onClick={() => likeAction()}>
    {atLeastOneLike ?
      <span><ThumbUpAltIcon/> Like</span> :
      <span><ThumbUpOutlinedIcon/> Like</span>
    }


  </div>;
};

export default withRouter(Like);
