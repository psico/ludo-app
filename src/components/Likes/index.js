import useStyles from "./css";
import Grid from "@material-ui/core/Grid";
import React from "react";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import UserAvatar from "../UserAvatar";

const Likes = () => {
    const componentClasses = useStyles();

    return (
        <div className={componentClasses.root}>
            <Grid container spacing={0}>
                <Grid item xs={1} sm={1} md={1} lg={1} xl={1} className={componentClasses.icon}>
                    <ThumbUpAltIcon />
                </Grid>
                <Grid item xs={1} sm={1} md={1} lg={1} xl={1} className={componentClasses.item}>
                    <UserAvatar showImage={true} showName={false}/>
                </Grid>
                <Grid item xs={1} sm={1} md={1} lg={1} xl={1} className={componentClasses.item}>
                    <UserAvatar showImage={true} showName={false}/>
                </Grid>
                <Grid item xs={1} sm={1} md={1} lg={1} xl={1} className={componentClasses.item}>
                    <UserAvatar showImage={true} showName={false}/>
                </Grid>
                <Grid item xs={1} sm={1} md={1} lg={1} xl={1} className={componentClasses.item}>
                    <UserAvatar showImage={true} showName={false}/>
                </Grid>
                <Grid item xs={1} sm={1} md={1} lg={1} xl={1} className={componentClasses.item}>
                    <UserAvatar showImage={true} showName={false}/>
                </Grid>
                <Grid item xs={1} sm={1} md={1} lg={1} xl={1} className={componentClasses.item}>
                    <UserAvatar showImage={true} showName={false}/>
                </Grid>
                <Grid item xs={1} sm={1} md={1} lg={1} xl={1} className={componentClasses.item}>
                    <UserAvatar showImage={true} showName={false}/>
                </Grid>
                <Grid item xs={1} sm={1} md={1} lg={1} xl={1} className={componentClasses.item}>
                    <UserAvatar showImage={true} showName={false}/>
                </Grid>
                <Grid item xs={1} sm={1} md={1} lg={1} xl={1} className={componentClasses.item}>
                    <UserAvatar showImage={true} showName={false}/>
                </Grid>
                <Grid item xs={1} sm={1} md={1} lg={1} xl={1} className={componentClasses.item}>
                    <UserAvatar showImage={true} showName={false}/>
                </Grid>
            </Grid>
        </div>
    )
};

export default Likes
