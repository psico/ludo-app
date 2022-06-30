import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import { gql, useMutation } from '@apollo/client';

const graphql = gql`
    mutation likeIt($idDoc: String) {
        likeIt(idDoc: $idDoc) {
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
