import React, {useState, useEffect} from "react";
import useStyles from "./css";
import {withRouter} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Grid from "@material-ui/core/Grid";
import firebase from "../firebase";
// import fetch from 'cross-fetch';

const PlayersSearch = () => {
    const componentClasses = useStyles();
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const loading = open && options.length === 0;

    const {t} = useTranslation();

    useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }

        (async () => {
            // firebase.firestore().collection("usersInfo")
            //     .get()
            //     .then(querySnapshot => {
            //         const data = querySnapshot.docs.map(doc => doc.data());
            //         console.log(data);
            //     });
            let friendPlayers;
            firebase.firestore()
                .collection("usersInfo")
                .get()
                .then(querySnapshot => {
                    // querySnapshot.data()
                    const data = querySnapshot.docs.map(doc => {
                        console.log(doc.data().userInfo.uid);
                        console.log("0IhNFZFa7QMwBY6yZT8l24L1AX32");

                        if (doc.data().userInfo.uid === "0IhNFZFa7QMwBY6yZT8l24L1AX32") {
                            friendPlayers = doc.data().userInfo.friends;
                            console.log(friendPlayers);
                        }
                    });
                });

            // const response = await fetch('https://boardgamegeek.com/xmlapi/search?search=catan');
            // const boardgamesXml = await response.text();
            // const boardgames = xml2js(boardgamesXml, {compact: true, spaces: 4});

            if (active) {
                // setOptions(Object.keys(boardgames.boardgames.boardgame).map((key) => boardgames.boardgames.boardgame[key]));
            }
        })();

        return () => {
            active = false;
        };
    }, [loading]);

    useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    return (
        <div>
            <Autocomplete
                id="asynchronous-player-search"
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
                        label={t('players')}
                        variant="outlined"
                        placeholder={t('search-match-players')}
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
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className={componentClasses.item}>
                {t('players')}
            </Grid>
        </div>
    );
};

export default withRouter(PlayersSearch);
