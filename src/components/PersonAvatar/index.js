import React, {useContext} from "react";
import Avatar from '@material-ui/core/Avatar';
import componentStyles from "./css";
import {AuthContext} from "../../App";

const PersonAvatar = (props) => {
    const classes = componentStyles();
    const {personInfo} = useContext(AuthContext);
    const {showName} = props;

    return (
        <div className={classes.root}>
            <Avatar variant="rounded" alt={personInfo.displayName} src={personInfo.photoURL} className={classes.small}/>
            {showName === true && <div className={classes.textAvatar}>{personInfo.displayName}</div>}
        </div>
    );
};

export default PersonAvatar;
