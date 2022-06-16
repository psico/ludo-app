import { withRouter } from 'react-router-dom';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import React, { useState } from 'react';

const Like = () => {
  const [atLeastOneLike] = useState(false);
  const likeAction = () => alert('like it');

  return <div onClick={() => likeAction()}>
    {atLeastOneLike ?
      <span><ThumbUpAltIcon/> Like</span> :
      <span><ThumbUpOutlinedIcon/> Like</span>
    }


  </div>;
};

export default withRouter(Like);
