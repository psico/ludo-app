import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import { gql, useMutation } from '@apollo/client';
import { useTranslation } from "react-i18next";

const graphql = gql`
    mutation likeIt($idDoc: String) {
        likeIt(idDoc: $idDoc) {
            idDoc
            createdAt
          }
    }
`;

const Like = ({ idDoc }) => {
  const {t} = useTranslation();
  const [atLeastOneLike, setAtLeastOneLike] = useState(false);
  const [likeIt] = useMutation(graphql);

  const likeAction = () => {
    setAtLeastOneLike(true);
    console.log('Here ======> ', idDoc);

    likeIt({
      variables: {
        'idDoc': idDoc,
      }
    }).then(() => ({}));
  }



  return <div onClick={() => likeAction()}>
    {atLeastOneLike ?
      <span><ThumbUpAltIcon/> {t("Like")}</span> :
      <span><ThumbUpOutlinedIcon/> {t("Like")}</span>
    }
  </div>;
};

export default withRouter(Like);
