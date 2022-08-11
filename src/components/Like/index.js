import React, { useContext, useState } from 'react';
import { withRouter } from 'react-router-dom';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import { gql, useMutation } from '@apollo/client';
import { useTranslation } from "react-i18next";
import { AuthContext } from '../../App';

const graphql = gql`
    mutation likeIt($idDoc: String) {
        likeIt(idDoc: $idDoc) {
            idDoc
            likes {
                uid
                name
            }
          }
    }
`;

const Like = ({ idDoc }) => {
  const {t} = useTranslation();
  const { userInfo } = useContext(AuthContext);
  const [atLeastOneLike, setAtLeastOneLike] = useState(false);
  const [likeIt] = useMutation(graphql);

  const likeAction = () => {
    setAtLeastOneLike(true);

    likeIt({
      variables: {
        'idDoc': idDoc,
      }
    }).then((likeData) => {
      console.log("Here ============> ", userInfo.uid, likeData.likes.find((like) => like.uid === userInfo.uid));
    });
  }



  return <div onClick={() => likeAction()}>
    {atLeastOneLike ?
      <span><ThumbUpAltIcon/> {t("Like")}</span> :
      <span><ThumbUpOutlinedIcon/> {t("Like")}</span>
    }
  </div>;
};

export default withRouter(Like);
