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
import Autocomplete from '@material-ui/lab/Autocomplete';
// import fetch from 'cross-fetch';
import CircularProgress from '@material-ui/core/CircularProgress';
import {xml2js} from "xml-js";
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';


const AddMatch = ({}) => {
    const componentClasses = useStyles();
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const loading = open && options.length === 0;
    const {t} = useTranslation();
    const [gameMoment, setGameMoment] = React.useState('play-now');

    const handleChange = (event, newGameMoment) => {
        setGameMoment(newGameMoment);
    };

    const handleForm = e => {
        e.preventDefault();

        firebase
            .setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .then(() => {

            });
    };

    React.useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }

        (async () => {
            const response = await fetch('https://boardgamegeek.com/xmlapi/search?search=catan');
            const boardgamesXml = await response.text();
            const boardgames = xml2js(boardgamesXml, {compact: true, spaces: 4});

            if (active) {
                setOptions(Object.keys(boardgames.boardgames.boardgame).map((key) => boardgames.boardgames.boardgame[key]));
            }
        })();

        return () => {
            active = false;
        };
    }, [loading]);

    React.useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

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
                                            defaultValue="João Gabriel"
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
                                        <Autocomplete
                                            id="asynchronous-demo"
                                            style={{width: 300}}
                                            open={open}
                                            onOpen={() => {
                                                setOpen(true);
                                            }}
                                            onClose={() => {
                                                setOpen(false);
                                            }}
                                            getOptionSelected={(option, value) => option.name._text === value.name._text}
                                            getOptionLabel={(option) => option.name._text}
                                            options={options}
                                            loading={loading}
                                            renderInput={(params) => (
                                                <TextField
                                                    required
                                                    {...params}
                                                    label={t('game')}
                                                    variant="outlined"
                                                    placeholder={t('search-match-game')}
                                                    fullWidth={true}
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    InputProps={{
                                                        ...params.InputProps,
                                                        endAdornment: (
                                                            <React.Fragment>
                                                                {loading ? <CircularProgress color="inherit"
                                                                                             size={20}/> : null}
                                                                {params.InputProps.endAdornment}
                                                            </React.Fragment>
                                                        ),
                                                    }}
                                                />
                                            )}
                                        />
                                    </Grid>
                                    {/* @TODO This function will be necessary in future */}
                                    {/*<Grid item xs={6} sm={6} md={6} lg={6} xl={6} className={componentClasses.item}>*/}
                                    {/*    <Button variant="contained" onClick={() => history.push('/gameRegister')}>{t('register-a-new-game')}</Button>*/}
                                    {/*</Grid>*/}
                                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className={componentClasses.item}>
                                        <TextField
                                            required
                                            label={t('players')}
                                            variant="outlined"
                                            placeholder={t('search-match-players')}
                                            fullWidth={true}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className={componentClasses.item}>
                                        {t('players')}
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                                          className={componentClasses.item}>
                                        <ToggleButtonGroup size="small" value={gameMoment} exclusive onChange={handleChange}>
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
                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                                          className={componentClasses.item}>
                                        <Button variant="contained">{t('game-rules-manual')}</Button>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                                          className={componentClasses.item}>
                                        <Button variant="contained" type="submit">{t('save')}</Button>
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
