import React from "react";
// import useStyles from "./css";
import {withRouter} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

const SearchGame = ({}) => {
    const componentClasses = useStyles();

    const {t} = useTranslation();

    return (
        <div className={componentClasses.root}>

        </div>
    );
};

export default withRouter(SearchGame);
