import React, {useEffect, useState} from "react";
import useStyles from "./css";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import UserAvatar from "../../components/UserAvatar";
import zombicide from "../../temp-images/zombicide.jpg";
import Comments from "../../components/Comments";
import Likes from "../../Likes";
import {useTranslation} from "react-i18next";
import firebase from "../../firebase";

const Community = () => {
        const componentClasses = useStyles();
        const {t} = useTranslation();
        const [communityList, setCommumnityList] = useState([{
            game: {},
            gameMoment: null,
            players: [{}],
            uid: null
        }]);

        const searchDataComunity = async () => {
            let dataCommunityRef = await firebase.firestore().collection('matches');
            try {
                const dataCommunitySnapShot = await dataCommunityRef
                    // .where("uid", "==", userInfo.uid)
                    .get();

                if (dataCommunitySnapShot.docs.length !== 0) {
                    setCommumnityList([...communityList, dataCommunitySnapShot.docs[0].data()]);
                    console.log(communityList);
                }
            } catch (err) {
                console.log('Error getting documents', err);
            }
        }

        useEffect(() => {
            return () => {
                searchDataComunity().then(r => r);
            }
        }, [communityList]);

        return (
            <div className={componentClasses.root}>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={componentClasses.item}>
                        <Paper className={componentClasses.paper}>
                            <Grid container spacing={0}>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <UserAvatar showName={true}/>
                                    <hr/>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                    <img src={zombicide} alt={t('logo-ludoapp')} height="300"/>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                    <Grid container spacing={0}>
                                        <Comments postId={10}/>
                                    </Grid>
                                    <hr/>
                                    <Likes postId={10}/>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Paper className={componentClasses.paper}>
                            <UserAvatar showName={true}/>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
;

export default Community;
