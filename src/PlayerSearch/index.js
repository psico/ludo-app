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

    useEffect( () => {
        (async () => {
            let usersInfoRef = firebase.firestore().collection('usersInfo');
            try {
                let usersInfoSnapShot = await usersInfoRef.where("uid", "==", userInfo.uid).get();

                setFriendPlayers(usersInfoSnapShot.docs[0].data().friends);
            } catch (err) {
                console.log('Error getting documents', err);
            }

        })();
    },[]);

    return (
        <div>
            <InputLabel htmlFor="filled-age-native-simple">Age</InputLabel>
            <Select
                native
                onChange={(option, value) => {
                    // if (option.name === value.name) {
                    //     setPlayers([...players, {name: option.name, uid: option.name}]);
                    //     return true
                    // }
                }
                }
                // label="Age"
                variant="outlined"
                inputProps={{
                    name: 'age',
                    id: 'filled-age-native-simple',
                }}
            >
                <option key={0} aria-label="None" value="" />
                {friendPlayers.map( (value) => {
                    return (<option key={value.uid} value={value.uid}>{value.name}</option>);
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
