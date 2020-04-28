import React from "react";
import useStyles from "./css";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import firebase from "../firebase";
import {withRouter} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import Paper from "@material-ui/core/Paper";
import UserAvatar from "../UserAvatar";
import TextField from '@material-ui/core/TextField';

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
        <div className={componentClasses.root}>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={componentClasses.item}>
                    <Paper className={componentClasses.paper}>
                        <Grid container spacing={0}>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <form noValidate onSubmit={e => handleForm(e)}>
                                    <h3>{t('add-match')}</h3>
                                    <hr/>
                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                        {t('host')}: <UserAvatar showName={true}/>
                                        <hr/>
                                        {t('game')}: <TextField label={t('search-match-game')} type="search" />
                                        {t('players')}: <TextField label={t('search-match-players')} type="search" />
                                        <Button variant="contained">{t('game-rules-manual')}</Button>
                                    </Grid>
                                    <Button variant="contained" type="submit">{t('schedule')}</Button>
                                    <Button variant="contained" type="submit">{t('register-match')}</Button>
                                    <Button variant="contained" type="submit">{t('play-now')}</Button>
                                </form>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default withRouter(AddMatch);
