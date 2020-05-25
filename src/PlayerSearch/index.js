import React, {useState, useEffect, useContext} from "react";
import useStyles from "./css";
import {withRouter} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Grid from "@material-ui/core/Grid";
import firebase from "../firebase";
import {AuthContext} from "../App";
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const PlayersSearch = () => {
    const componentClasses = useStyles();
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const [players, setPlayers] = useState([{name: 'João Gabriel', uid: 'asdfasfasfd'}]);
    const [friendPlayers, setFriendPlayers] = useState([{name: 'João Gabriel', uid: 'asdfasfasfd'}]);
    // const [friendPlayersReq, setFriendPlayersReq] = useState(false);
    const loading = open && options.length === 0;
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });

    const {t} = useTranslation();
    const {userInfo} = useContext(AuthContext);

    useEffect( () => {
        // return () => {
        (async () => {
            console.log("start");
            //     if (friendPlayersReq === false) {
            //         let friendPlayers;
            let usersInfoRef = firebase.firestore().collection('usersInfo');
            try {
                let usersInfoSnapShot = await usersInfoRef.where("userInfo.uid", "==", userInfo.uid).get();
                // console.log([usersInfoSnapShot.docs[0].data().userInfo.friends]);
                // friendPlayers = [usersInfoSnapShot.docs[0].data().userInfo.friends];
                console.log(usersInfoSnapShot.docs[0].data().userInfo.friends);
                console.log(usersInfoSnapShot.docs[0].data().userInfo.friends.parse);
                console.log(Object.entries(usersInfoSnapShot.docs[0].data().userInfo.friends));
                console.log([usersInfoSnapShot.docs[0].data().userInfo.friends]);
                // friendPlayers = [{name:'teste'}, {name:'teste2'}];
                // console.log(usersInfoSnapShot);
                // console.log(usersInfoSnapShot.docs);
                // console.log(usersInfoSnapShot.docs[0]);
                // setOptions(Object.keys(friendPlayers[0]).map((key) => friendPlayers[0][key]));
                setFriendPlayers(Object.entries(usersInfoSnapShot.docs[0].data().userInfo.friends));
                // setFriendPlayersReq(true);
                console.log("end")
            } catch (err) {
                console.log('Error getting documents', err);
            }

            // if (friendPlayers.length !== 0) {
            //     if (active) {
            //         setOptions(Object.keys(friendPlayers).map((key) => friendPlayers[key]));
            //     }
            // }
            // }
        })();
        // });
    },[]);

    // useEffect(() => {
    //     let active = true;
    //
    //     if (!loading) {
    //         return undefined;
    //     }
    //
    //     (async () => {
    //         console.log("start");
    //         if (friendPlayersReq === false) {
    //             let friendPlayers;
    //             let usersInfoRef = firebase.firestore().collection('usersInfo');
    //             try {
    //                 var usersInfoSnapShot = await usersInfoRef.where("userInfo.uid", "==", userInfo.uid).get();
    //                 friendPlayers = usersInfoSnapShot.docs[0].data();
    //                 setOptions(Object.keys(friendPlayers).map((key) => friendPlayers[key]));
    //                 setFriendPlayersReq(true);
    //                 console.log("end")
    //             } catch (err) {
    //                 console.log('Error getting documents', err);
    //             }
    //
    //             // if (friendPlayers.length !== 0) {
    //             //     if (active) {
    //             //         setOptions(Object.keys(friendPlayers).map((key) => friendPlayers[key]));
    //             //     }
    //             // }
    //         }
    //     })();
    //
    //     return () => {
    //         active = false;
    //     };
    // }, [loading, userInfo.uid, friendPlayersReq, setFriendPlayersReq]);
    //
    // useEffect(() => {
    //     if (!open) {
    //         setOptions([]);
    //     }
    // }, [open]);

    return (
        <div>
            {/*<Autocomplete*/}
            {/*    id="asynchronous-player-search"*/}
            {/*    style={{width: 300}}*/}
            {/*    open={open}*/}
            {/*    onOpen={() => {*/}
            {/*        setOpen(true);*/}
            {/*    }}*/}
            {/*    onClose={() => {*/}
            {/*        setOpen(false);*/}
            {/*    }}*/}
            {/*    getOptionSelected={(option, value) => {*/}
            {/*        if (option.name === value.name) {*/}
            {/*            setPlayers([...players, {name: option.name, uid: option.name}]);*/}
            {/*            return true*/}
            {/*        }*/}
            {/*    }*/}
            {/*    }*/}
            {/*    getOptionLabel={(option) => option.name}*/}
            {/*    options={options}*/}
            {/*    loading={loading}*/}
            {/*    renderInput={(params) => (*/}
            {/*        <TextField*/}
            {/*            required*/}
            {/*            {...params}*/}
            {/*            label={t('players')}*/}
            {/*            variant="outlined"*/}
            {/*            placeholder={t('search-match-players')}*/}
            {/*            fullWidth={true}*/}
            {/*            InputLabelProps={{*/}
            {/*                shrink: true,*/}
            {/*            }}*/}
            {/*            InputProps={{*/}
            {/*                ...params.InputProps,*/}
            {/*                endAdornment: (*/}
            {/*                    <React.Fragment>*/}
            {/*                        {loading ? <CircularProgress color="inherit"*/}
            {/*                                                     size={20}/> : null}*/}
            {/*                        {params.InputProps.endAdornment}*/}
            {/*                    </React.Fragment>*/}
            {/*                ),*/}
            {/*            }}*/}
            {/*        />*/}
            {/*    )}*/}
            {/*/>*/}
            <InputLabel htmlFor="filled-age-native-simple">Age</InputLabel>
            <Select
                native
                value={state.age}
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
                <option aria-label="None" value="" />
                {friendPlayers.map( (value,key) => {
                    return (<option key={value.name} value={value.name}>{value.name}</option>);
                })}
                {/*<option value={10}>Ten</option>*/}
                {/*<option value={20}>Twenty</option>*/}
                {/*<option value={30}>Thirty</option>*/}
            </Select>
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className={componentClasses.item}>
                {t('players')}
                {players.map(data => <div key={data.uid}>{data.name}</div>)}
            </Grid>
        </div>
    );
};

export default withRouter(PlayersSearch);
