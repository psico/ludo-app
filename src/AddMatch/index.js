import React from "react";
import useStyles from "./css";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import firebase from "../firebase";
import {withRouter} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

const AddMatch = ({}) => {
    const componentClasses = useStyles();

    const {t} = useTranslation();

    const handleForm = e => {
        e.preventDefault();

        firebase
            .setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .then(() => {

            });
    };

    return (
        <Grid container spacing={0} className={componentClasses.root}>
            <form onSubmit={e => handleForm(e)}>
                <h1>{t('login')}</h1>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={componentClasses.item}>
                </Grid>
                <Button variant="contained" type="submit">Login</Button>
            </form>
        </Grid>
    );
};

export default withRouter(AddMatch);
