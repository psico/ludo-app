import React, {useContext, useState} from "react";
import useStyles from "./css";
import {useTranslation} from "react-i18next";
import Input from '@material-ui/core/Input';
import MessageIcon from '@material-ui/icons/Message';
import ShowSnackbar from "../ShowSnackbar";
import {AuthContext} from "../../App";
import {useMutation, gql} from "@apollo/client";

const graphql = gql`
    mutation addComment($CommentInput: CommentInput){
        addComment(CommentInput:$CommentInput) {
            players {
                uid
                name
            }
        }
    }
`;

const CommentInput = ({matchId}) => {
    const componentClasses = useStyles();
    const {t} = useTranslation();
    const {userInfo} = useContext(AuthContext);
    const snackbarRef = React.createRef();
    const [comment, setComment] = useState("");
    const [addComment] = useMutation(graphql);

    const handleForm = async e => {
        e.preventDefault();

        if (comment !== "") {
            addComment({
                variables: {
                    CommentInput: {
                        "idDoc": matchId,
                        "text": comment
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
