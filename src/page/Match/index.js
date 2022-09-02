import React, {useContext } from "react";
import useStyles from "./css";
import {withRouter} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {AuthContext} from "../../App";
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom/cjs/react-router-dom';

const graphqlUserInfo = gql`
query getMatch($idDoc: ID!) {
  match(idDoc: $idDoc) {
    idDoc
    matchOwner {
      uid
      name
      photoURL
    }
    gameMoment
    game {
      name
    }
    comments {
      uid
      name
      photoURL
      comment
    }
    players {
      uid
      name
      photoURL
    }
    
  }
}
`;

const Match = () => {
    const componentClasses = useStyles();
    const {t} = useTranslation();

    const { data } = useQuery(graphqlUserInfo, {
        variables: { idDoc: useParams().id }
    });

    return (
        <div className={componentClasses.root}>
            Match
        </div>
    );
};

export default withRouter(Match);
