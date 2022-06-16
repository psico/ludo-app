import { withRouter } from 'react-router-dom';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import React from 'react';
// import { useState } from '@types/react';

const Like = () => {
  // const [atLeastOneLike, setAtLeastOneLike] = useState(false);
  const likeAction = () => alert('like it');

  // return <div onClick={() => likeAction()}>
  //   {atLeastOneLike ?
  //     <span><ThumbUpAltIcon/> Like</span> :
  //     <span><ThumbUpOutlinedIcon/> Like</span>
  //   }
  //
  //
  // </div>;

  return <div onClick={() => likeAction()}>
      <span><ThumbUpAltIcon/> Like</span>
  </div>;
};

export default withRouter(Like);
