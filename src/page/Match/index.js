import React, {useContext, useEffect } from "react";
import useStyles from "./css";
import {withRouter} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {AuthContext} from "../../App";
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom/cjs/react-router-dom';

// const graphqlUserInfo = gql`
//   query userInfo($uid: ID!) {
//     userInfo(uid: $uid) {
//       uid
//       name
//       numberOfMatches
//       following {
//         uid
//         name
//       }
//       followers {
//         uid
//         name
//       }
//       friends {
//         uid
//         name
//       }
//     }
//
//     matches(uid: $uid) {
//       idDoc
//       gameMoment
//       createdAt
//       game {
//         name
//         objectId
//         yearPublished
//         description
//         imageUrl
//       }
//       comments {
//         uid
//         name
//         comment
//         photoURL
//       }
//       players {
//         uid
//         name
//         friends {
//           uid
//           name
//         }
//         numberOfMatches
//         following {
//           uid
//           name
//         }
//         followers {
//           uid
//           name
//         }
//       }
//     }
//   }
// `;

const Match = () => {
    const componentClasses = useStyles();
    const {t} = useTranslation();
    const {userInfo} = useContext(AuthContext);

    const { data } = useQuery(graphqlUserInfo, {
        variables: { uid: useParams().id }
    });

    return (
        <div className={componentClasses.root}>

        </div>
    );
};

export default withRouter(Match);
