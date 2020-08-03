import React, {useState, useEffect, useContext} from "react";
import useStyles from "./css";
import {withRouter} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import Grid from "@material-ui/core/Grid";
import firebase from "../../firebase";
import {AuthContext} from "../../App";
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
// import NativeSelect from '@material-ui/core/NativeSelect';

const PlayersSearch = ({ parentCallback }) => {
    const componentClasses = useStyles();
    const [players, setPlayers] = useState([]);
    const [friendPlayers, setFriendPlayers] = useState([]);

    const {t} = useTranslation();
    const {userInfo} = useContext(AuthContext);

    useEffect(() => {
        (async () => {
            setPlayers([{name: userInfo.displayName, uid: userInfo.uid}]);

            let usersInfoRef = firebase.firestore().collection('usersInfo');
            try {
                const usersInfoSnapShot = await usersInfoRef
                    .where("uid", "==", userInfo.uid)
                    .get();

                if (usersInfoSnapShot.docs.length !== 0) {
                    const orderFriends = usersInfoSnapShot.docs[0].data().friends
                        .sort(function (a, b) {
                            if (a.name < b.name) {
                                return -1;
                            }
                            if (a.name > b.name) {
                                return 1;
                            }
                            return 0;
                        });

                    setFriendPlayers(orderFriends);
                }
            } catch (err) {
                console.log('Error getting documents', err);
            }

        })();
    }, [userInfo]);

    return (
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={componentClasses.item}>
            <InputLabel htmlFor="label">{t('choose-the-players')}</InputLabel>
            <Select
                native
                value={players.uid}
                onChange={(option) => {
                    if (option.target.value !== "" && option.target.value !== undefined) {
                        let objPlayer = JSON.parse(option.target.value);
                        if (!(players.find(element => element.uid === objPlayer.uid))) {
                            setPlayers([...players, objPlayer]);
                            parentCallback(players);
                        }
                    }
                }}
                label={t('choose-the-players')}
                variant="outlined"
                inputProps={{
                    name: t('choose-the-players'),
                    id: 'label',
                }}>
                <option aria-label={t('friends-list')} value="">{t('friends-list')}</option>
                {friendPlayers.map((value) => {
                    return (<option key={'option_' + value.uid} value={JSON.stringify(value)}>{value.name}</option>);
                })}
                className={componentClasses.item}
            </Select>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={componentClasses.item} variant="outlined">
                <h3>{t('players')}</h3>
                {players.length > 1
                    ? players.map(data => <div key={'div_' + data.uid}>{data.name}</div>)
                    : <div>Nenhum jogador selecionado</div>
                }
            </Grid>
        </Grid>
    );
};

export default withRouter(PlayersSearch);
