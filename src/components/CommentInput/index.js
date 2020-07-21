import React, {useState} from "react";
import useStyles from "./css";
import {useTranslation} from "react-i18next";

const CommentInput = (props) => {
    const componentClasses = useStyles();
    const {t} = useTranslation();
    const [comment, setComment] = useState();

    return (
        <div className={componentClasses.root}>
            <input
                value={comment}
                onChange={e => setComment(e.target.value)}
                name="comment"
                type="text"
                placeholder={t('comment')}
            />
        </div>
    )
};

export default CommentInput;
