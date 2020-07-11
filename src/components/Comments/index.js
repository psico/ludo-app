import React from "react";
import useStyles from "./css";
import UserAvatar from "../UserAvatar";
import Grid from "@material-ui/core/Grid";

const Comments = (props) => {
    const componentClasses = useStyles();

    return (
        <div className={componentClasses.root}>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={componentClasses.item}>
                    <UserAvatar showImage={true} showName={true}/>Prefiro o Black Plague {props.postId}
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={componentClasses.item}>
                    <UserAvatar showImage={true} showName={true}/>O bacana é que tem muitas expansões
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={componentClasses.item}>
                    <UserAvatar showImage={true} showName={true}/>A expansão do Black Plague demoro mas chegou
                </Grid>
            </Grid>
        </div>
    )
};

export default Comments;
