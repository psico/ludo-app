import React, {useContext} from "react";
import componentStyles from "./css";
import lvl from "../temp-images/lvl-coronel.png";
import LinearProgress from '@material-ui/core/LinearProgress';
import {lighten, withStyles} from '@material-ui/core/styles';
import UserAvatar from "../components/UserAvatar";
import {AuthContext} from "../App";
import {useTranslation} from "react-i18next";

const InfoHeader = () => {
    const classes = componentStyles();
    const {t} = useTranslation();
    const [completed] = React.useState(30);

    const {userInfo} = useContext(AuthContext);

    const BorderLinearProgress = withStyles({
        root: {
            height: 10,
            borderRadius: 2,
            backgroundColor: lighten('#ff6c5c', 0.5),
        },
        bar: {
            borderRadius: 3,
            backgroundColor: '#ff6c5c',
        },
    })(LinearProgress);

    return (
        <span>
        {userInfo.isLoggedIn ?
            <div className={classes.infoHeader}>
                <UserAvatar showName={false}/>
                <img src={lvl} alt={t('user-level')} height="25"/>
                <h5>
                    <div>Level 30 - Dice Explorer {userInfo.isLoggedIn}</div>
                    <BorderLinearProgress
                        className={classes.margin}
                        variant="determinate"
                        color="secondary"
                        value={completed}
                    />
                </h5>
            </div>
            :
            <span />
        }
        </span>
    );
};

export default InfoHeader;
