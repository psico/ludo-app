import { withRouter } from 'react-router-dom';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import React from '@types/react';

const Like = () => {
  return <div>
    <ThumbUpAltIcon/> Like
  </div>;
};

export default withRouter(Like);
