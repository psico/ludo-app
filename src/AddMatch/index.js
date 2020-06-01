import React, {useContext} from "react";
import useStyles from "./css";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import firebase from "../firebase";
import {withRouter} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import Paper from "@material-ui/core/Paper";
import UserAvatar from "../UserAvatar";
import TextField from '@material-ui/core/TextField';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import GameSearch from "../GameSearch";
import PlayersSearch from "../PlayerSearch";
import {AuthContext} from "../App";


const AddMatch = () => {
    const componentClasses = useStyles();
    const {t} = useTranslation();
    const {userInfo} = useContext(AuthContext);
    const [match, setMatch] = React.useState({
        "uid": null,
        "gameMoment": "play-now"
    });
    // const [gameMomentSelect, setGameMomentSelect] = React.useState();


    const toggleChange = (event, newGameMoment) => {
        setMatch({
            ...match,
            "gameMoment": newGameMoment
        });
    };

    const handleForm = e => {
        e.preventDefault();

        let matches = firebase.firestore().collection("matches").doc();

        matches.set({
            ...match,
            "uid": userInfo.uid
        }, {merge:true});

        // console.log(gameMomentSelect);
    };

    let gameCallback = (gameData) => {
        setMatch({
            ...match,
            "game": {
                "name": gameData.name._text,
                "yearpublished": gameData.yearpublished._text,
                "objectid": gameData._attributes.objectid
            }
        });
    }


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
                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                                          className={componentClasses.item}>
                                        <TextField
                                            required
                                            label={t('host')}
                                            InputProps={{
                                                readOnly: true,
                                                startAdornment: (
                                                    <UserAvatar showName={false}/>
                                                ),
                                            }}
                                            defaultValue={userInfo.displayName}
                                            variant="outlined"
                                            helperText={t('the-host-cannot-be-changed')}
                                            placeholder={t('search-match-game')}
                                            fullWidth={true}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                                          className={componentClasses.item}>
                                        <GameSearch parentCallback={gameCallback} />
                                    </Grid>
                                    {/* @TODO This function will be necessary in future */}
                                    {/*<Grid item xs={6} sm={6} md={6} lg={6} xl={6} className={componentClasses.item}>*/}
                                    {/*    <Button variant="contained" onClick={() => history.push('/gameRegister')}>{t('register-a-new-game')}</Button>*/}
                                    {/*</Grid>*/}
                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                                          className={componentClasses.item}>
                                        <ToggleButtonGroup size="small" value={match.gameMoment} exclusive
                                                           onChange={toggleChange}>
                                            [
                                            <ToggleButton key={1} value="play-now">
                                                {t('play-now')}
                                            </ToggleButton>,
                                            <ToggleButton key={2} value="schedule">
                                                {t('schedule')}
                                            </ToggleButton>,
                                            <ToggleButton key={3} value="register-match">
                                                {t('register-match')}
                                            </ToggleButton>,
                                            ]
                                        </ToggleButtonGroup>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className={componentClasses.item}>
                                        <PlayersSearch/>
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                                          className={componentClasses.item}>
                                        <Button variant="contained">{t('game-rules-manual')}</Button>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                                          className={componentClasses.item}>
                                        <Button variant="contained" type="submit" color="primary">{t('save')}</Button>
                                    </Grid>
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
