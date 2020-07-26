import React, {useState} from "react";
import useStyles from "./css";
import {useTranslation} from "react-i18next";
import Input from '@material-ui/core/Input';
import MessageIcon from '@material-ui/icons/Message';

const CommentInput = (props) => {
    const componentClasses = useStyles();
    const {t} = useTranslation();
    const [comment, setComment] = useState("");

    const handleForm = async e => {

    }

    return (
        <div className={componentClasses.root}>
            <form noValidate onSubmit={e => handleForm(e)}>
                <Input
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    fullWidth="true"
                    placeholder={t("write-a-comment")}
                    endAdornment={<MessageIcon position="end">Kg</MessageIcon>}
                />
            </form>
        </div>
    )
};

export default CommentInput;
