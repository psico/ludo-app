import React, {useState} from "react";
import useStyles from "./css";
import {useTranslation} from "react-i18next";
import Input from '@material-ui/core/Input';
import MessageIcon from '@material-ui/icons/Message';
// import ShowSnackbar from "../../components/ShowSnackbar";
import firebase from "../../firebase";
import ShowSnackbar from "../ShowSnackbar";

const CommentInput = (props) => {
    const componentClasses = useStyles();
    const {t} = useTranslation();
    const [comment, setComment] = useState("");
    const [match, setMatch] = React.useState({});
    const snackbarRef = React.createRef();

    const handleForm = async e => {
        e.preventDefault();
        console.log(comment);
        console.log(props);
        if (comment !== "") {
            let matchesRef = await firebase.firestore().collection("matches").doc(props.match);
            let doc = await matchesRef.get();
            // console.log();
            await matchesRef.set({
                ...doc.data(),
                comment
            });

            // match.uid = userInfo.uid;

            // setMatch({
            //     ...matches,
            //     "comment": comment
            // });

            // await matches.set(match, {merge: true});

            // snackbarRef.current.handleClick("salvo?", 'success');
            // history.push('/community');
        } else {
            snackbarRef.current.handleClick("test", 'warning');
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
