import React from "react";
import useStyles from "./css";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import UserAvatar from "../UserAvatar";
import zombicide from "../temp-images/zombicide.jpg";
import Comments from "../Comments";
import Likes from "../Likes";

const Community = () => {
        const componentClasses = useStyles();

        return (
            <div className={componentClasses.root}>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={componentClasses.item}>
                        <Paper className={componentClasses.paper}>
                            <Grid container spacing={0}>
                                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={componentClasses.vl}>
                                    <UserAvatar showName={true}/>
                                    <hr />
                                    <Grid container spacing={0}>
                                        <Comments postId={10}/>
                                    </Grid>
                                    <hr />
                                        <Likes postId={10}/>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                    <img src={zombicide} alt="logo ludoApp" height="300"/>
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
