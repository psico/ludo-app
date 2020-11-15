import React, {useContext, useState} from "react";
import useStyles from "./css";
import {useTranslation} from "react-i18next";
import Input from '@material-ui/core/Input';
import MessageIcon from '@material-ui/icons/Message';
import ShowSnackbar from "../ShowSnackbar";
import {AuthContext} from "../../App";
// import {gql} from "@apollo/client";
// import makeApolloClient, { useMutation } from '../../apollo';

const CommentInput = (props) => {
    const componentClasses = useStyles();
    const {t} = useTranslation();
    const {userInfo} = useContext(AuthContext);
    const snackbarRef = React.createRef();
    const [comment, setComment] = useState("");

    // const ADD_TODO = gql`
    //     mutation createMatch($comment: CommentInput){
    //         createComment(comment:$comment) {
    //             uid
    //             name
    //             comment
    //         }
    //     }
    // `;
    // const [addTodo, { data }] = useMutation(ADD_TODO);


    const handleForm = async e => {
        e.preventDefault();

        console.log(props);
        console.log(props.match);
        if (comment !== "") {
            // const client = makeApolloClient();
            // let doc1 = await client
            // .mutate({
            //     mutation: gql`
            //         mutation createMatch($comment: CommentInput){
            //             createComment(comment:$comment) {
            //                 uid
            //                 name
            //                 comment
            //             }
            //         }
            //     `
            // })
            // .then(result => {
            //     return result.data.matches;
            // })
            // .catch(result => {
            //     alert("Sorry but we have internal server erro");
            //     console.log(result);
            // });





            // await addTodo({variables: {comment: comment}});

            // console.log(addTodo);
            //
            // const matchesRef = await firebase.firestore()
            //     .collection("matches")
            //     .doc(props.match);
            // const doc = await matchesRef.get();
            // console.log(doc);
            //
            // let arrComment;
            // if (doc.data().comments) {
            //     arrComment = [
            //         ...doc.data().comments,
            //         {
            //             uid: userInfo.uid,
            //             name: userInfo.displayName,
            //             comment: comment
            //         }
            //     ];
            // } else {
            //     arrComment = [{
            //         uid: userInfo.uid,
            //         name: userInfo.displayName,
            //         comment: comment
            //     }];
            // }
            //
            // await matchesRef.set({
            //     ...doc.data(),
            //     comments: arrComment
            // });

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
