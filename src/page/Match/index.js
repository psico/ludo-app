import React, {useContext } from "react";
import useStyles from "./css";
import {withRouter} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {AuthContext} from "../../App";
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom/cjs/react-router-dom';

const graphqlUserInfo = gql`
  
`;

const Match = () => {
    const componentClasses = useStyles();
    const {t} = useTranslation();
    const {userInfo} = useContext(AuthContext);

    const { data } = useQuery(graphqlUserInfo, {
        variables: { uid: useParams().id }
    });

    return (
        <div className={componentClasses.root}>
            Match
        </div>
    );
};

export default withRouter(Match);
