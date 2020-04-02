import useStyles from "./css";
import Grid from "@material-ui/core/Grid";
import React from "react";

const Likes = (props) => {
    const componentClasses = useStyles();

    return (
        <div className={componentClasses.root}>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={componentClasses.item}>
                    {props.postId}
                </Grid>
            </Grid>
        </div>
    )
};

export default Likes
