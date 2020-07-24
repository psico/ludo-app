import React, {useState} from "react";
import useStyles from "./css";
import {useTranslation} from "react-i18next";
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import MessageIcon from '@material-ui/icons/Message';

const CommentInput = (props) => {
    const componentClasses = useStyles();
    const {t} = useTranslation();
    const [comment, setComment] = useState();

    // return (
    //     <div className={componentClasses.root}>
    //         <input
    //             value={comment}
    //             onChange={e => setComment(e.target.value)}
    //             name="comment"
    //             type="text"
    //             placeholder={t('comment')}
    //         />
    //     </div>
    // )
    return (
        <div className={componentClasses.root}>
            <Input
                value={comment}
                endAdornment={<MessageIcon position="end">Kg</MessageIcon>}
            />
        </div>
    )
};

export default CommentInput;
