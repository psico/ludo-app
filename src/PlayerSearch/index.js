import React, {useState, useEffect, useContext} from "react";
import useStyles from "./css";
import {withRouter} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import Grid from "@material-ui/core/Grid";
import firebase from "../firebase";
import {AuthContext} from "../App";
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
// import NativeSelect from '@material-ui/core/NativeSelect';

const PlayersSearch = () => {
    const componentClasses = useStyles();
    const [players, setPlayers] = useState([{}]);
    const [friendPlayers, setFriendPlayers] = useState([{}]);

    const {t} = useTranslation();
    const {userInfo} = useContext(AuthContext);

    useEffect(() => {
        (async () => {
            let usersInfoRef = firebase.firestore().collection('usersInfo');
            try {
                let usersInfoSnapShot = await usersInfoRef.where("uid", "==", userInfo.uid).get();

                setFriendPlayers(usersInfoSnapShot.docs[0].data().friends);
            } catch (err) {
                console.log('Error getting documents', err);
            }

        })();
    }, [userInfo]);

    return (
        <div>
            <InputLabel htmlFor="label">{t('choose-the-players')}</InputLabel>
            <Select
                native
                value={players.uid}
                onChange={(option) => {
                    setPlayers([...players, JSON.parse(option.target.value)]);
                }}
                label={t('choose-the-players')}
                variant="outlined"
                inputProps={{
                    name: t('choose-the-players'),
                    id: 'label',
                }}>
                {/*<option aria-label="None" value="">{t('friends-list')}</option>*/}
                {friendPlayers.map((value) => {
                    return (<option key={value.uid} value={JSON.stringify(value)}>{value.name}</option>);
                })}
            </Select>
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className={componentClasses.item}>
                {t('players')}
                {players.map(data => <div key={data.uid}>{data.name}</div>)}
            </Grid>
        </div>
    );
};

export default withRouter(PlayersSearch);
