import { withRouter } from 'react-router-dom';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import React from 'react';

const Like = () => {
  const likeAction = () => alert("like it");

  return <div onClick={likeAction()}>
    <ThumbUpAltIcon/> Like
  </div>;
};

export default withRouter(Like);
