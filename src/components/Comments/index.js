import React from "react";
import useStyles from "./css";
import Grid from "@material-ui/core/Grid";
import PersonAvatar from "../PersonAvatar";
import {useTranslation} from "react-i18next";

const Comments = (props) => {
    const componentClasses = useStyles();
    const {t} = useTranslation();

    return (
        <div className={componentClasses.root}>
            <Grid container spacing={0}>
                {
                    props.arrComments ?
                        props.arrComments.map((comment, index) => {
                            return <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                                  className={componentClasses.item}
                                  key={"comment_" + index}>
                                <PersonAvatar
                                    key={"person_comment_" + index}
                                    displayName={comment.name}
                                    photoURL={comment.photoURL}
                                    showName={true}/>
                                {comment.comment}
                            </Grid>
                        })
                        :
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={componentClasses.item}>
                            {t("no-comments-made-you-can-be-the-first")}
                        </Grid>
                }
            </Grid>
        </div>
    )
};

export default Comments;
