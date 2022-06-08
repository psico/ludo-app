import { withRouter } from 'react-router-dom';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import React from 'react';

const Like = () => {
  return <div onClick={() => alert("test")}>
    <ThumbUpAltIcon/> Like
  </div>;
};

export default withRouter(Like);
