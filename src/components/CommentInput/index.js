import React, {useContext, useState} from "react";
import useStyles from "./css";
import {useTranslation} from "react-i18next";
import Input from '@material-ui/core/Input';
import MessageIcon from '@material-ui/icons/Message';
import ShowSnackbar from "../ShowSnackbar";
import {AuthContext} from "../../App";
import {useMutation, gql} from "@apollo/client";

const graphql = gql`
    mutation createMatch($comment: CommentInput){
        createComment(comment:$comment) {
            uid
            name
            comment
        }
    }
`;

const CommentInput = (props) => {
    const componentClasses = useStyles();
    const {t} = useTranslation();
    const {userInfo} = useContext(AuthContext);
    const snackbarRef = React.createRef();
    const [comment, setComment] = useState("");
    const [addComment, {data}] = useMutation(graphql);

    const handleForm = async e => {
        e.preventDefault();

        if (comment !== "") {
            addComment({
                variables: {
                    comment: {
                        "uid": userInfo.uid,
                        "matchId": props.match,
                        "comment": comment
                    }
                }
            });

            snackbarRef.current.handleClick(t('comment-saved'), 'success');
            setComment("");
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
