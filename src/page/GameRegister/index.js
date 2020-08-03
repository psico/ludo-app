import React from "react";
import useStyles from "./css";
import Grid from "@material-ui/core/Grid";
import firebase from "../../firebase";
import {withRouter} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import Paper from "@material-ui/core/Paper";

const GameRegister = () => {
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
        <div className={componentClasses.root}>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={componentClasses.item}>
                    <Paper className={componentClasses.paper}>
                        <Grid container spacing={0}>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <form noValidate onSubmit={e => handleForm(e)}>
                                    <h3>{t('register-a-new-game')}</h3>
                                    <hr/>
                                </form>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default withRouter(GameRegister);
