import React, {useContext, useState} from "react";
import useStyles from "./css";
import {useTranslation} from "react-i18next";
import Input from '@material-ui/core/Input';
import MessageIcon from '@material-ui/icons/Message';
import firebase from "../../firebase";
import ShowSnackbar from "../ShowSnackbar";
import {AuthContext} from "../../App";

const CommentInput = (props) => {
    const componentClasses = useStyles();
    const {t} = useTranslation();
    const {userInfo} = useContext(AuthContext);
    const snackbarRef = React.createRef();
    const [comment, setComment] = useState("");

    const handleForm = async e => {
        e.preventDefault();

        if (comment !== "") {
            const matchesRef = await firebase.firestore()
                .collection("matches")
                .doc(props.match);
            const doc = await matchesRef.get();

            let arrComment;
            if (doc.data().comments) {
                arrComment = [
                    ...doc.data().comments,
                    {
                        uid: userInfo.uid,
                        name: userInfo.displayName,
                        comment: comment
                    }
                ];
            } else {
                arrComment = [{
                    uid: userInfo.uid,
                    name: userInfo.displayName,
                    comment: comment
                }];
            }

            await matchesRef.set({
                ...doc.data(),
                comments: arrComment
            });

            snackbarRef.current.handleClick(t('comment-saved'), 'success');
        } else {
            snackbarRef.current.handleClick(t('write-a-comment'), 'warning');
        }
    }

    return (
        <div className={componentClasses.root}>
            <ShowSnackbar ref={snackbarRef}/>
            <form noValidate onSubmit={e => handleForm(e)}>
                <Input
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    fullWidth={true}
                    placeholder={t("write-a-comment")}
                    endAdornment={<MessageIcon position="end">Kg</MessageIcon>}
                />
            </form>
        </div>
    )
};

export default CommentInput;
