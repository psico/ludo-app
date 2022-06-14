import { withRouter } from 'react-router-dom';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import React from 'react';

const Like = () => {
  const likeAction = () => alert("like it");

  return <div onClick={() => likeAction()}>
    <ThumbUpAltIcon/> Like
    <ThumbUpOutlinedIcon /> Like
  </div>;
};

export default withRouter(Like);
