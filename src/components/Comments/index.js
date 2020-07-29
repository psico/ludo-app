import React from "react";
import useStyles from "./css";
import Grid from "@material-ui/core/Grid";
import PersonAvatar from "../PersonAvatar";

const Comments = (props) => {
    const componentClasses = useStyles();

    return (
        <div className={componentClasses.root}>
            <Grid container spacing={0}>
                {
                    props.arrComments &&
                    props.arrComments.map((comment, index) =>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={componentClasses.item}>
                            <PersonAvatar
                                key={"person_comment_" + index}
                                displayName={comment.name}
                                showName={true}/>
                            {comment.comment}
                        </Grid>
                    )
                }
                {/*<Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={componentClasses.item}>*/}
                {/*    <UserAvatar showImage={true} showName={true}/>O bacana é que tem muitas expansões*/}
                {/*</Grid>*/}
                {/*<Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={componentClasses.item}>*/}
                {/*    <UserAvatar showImage={true} showName={true}/>A expansão do Black Plague demoro mas chegou*/}
                {/*</Grid>*/}
            </Grid>
        </div>
    )
};

export default Comments;
