import React, { useContext, useEffect, useState } from 'react';
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

const Like = ({ idDoc, likes }) => {
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
    }).then((result) => {
      // console.log("Here ===========? ", result.data.likeIt);
      console.log("Here ============> ", userInfo.uid, result.data?.likeIt?.likes?.find((like) => like.uid === userInfo.uid));

      if (result.data?.likeIt?.likes?.find((like) => like.uid === userInfo.uid)) {
        setAtLeastOneLike(true);
      } else {
        setAtLeastOneLike(false);
      }
    });
  }

  useEffect(() => {
    if (likes?.find((like) => like.uid === userInfo.uid)) {
      setAtLeastOneLike(true);
    } else {
      setAtLeastOneLike(false);
    }
  },[]);



  return <div onClick={() => likeAction()}>
    {atLeastOneLike ?
      <span><ThumbUpAltIcon/> {t("Like")}</span> :
      <span><ThumbUpOutlinedIcon/> {t("Like")}</span>
    }
  </div>;
};

export default withRouter(Like);
