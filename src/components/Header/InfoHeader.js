import React, { useContext, useEffect } from 'react';
import componentStyles from "./css";
import lvl from "../../temp-images/lvl-coronel.png";
import LinearProgress from '@material-ui/core/LinearProgress';
import {lighten, withStyles} from '@material-ui/core/styles';
import UserAvatar from "../UserAvatar";
import {AuthContext} from "../../App";
import {useTranslation} from "react-i18next";
import { gql, useQuery } from '@apollo/client';

const graphql = gql`
    query userExperienceInfo($uid: uid){
        userExperienceInfo(uid: $uid) {
            totalExperience
            level
            nextLevelExperience
        }
    }
`;

const InfoHeader = () => {
    const classes = componentStyles();
    const {t} = useTranslation();
    const [completed] = React.useState(30);
    const {userInfo} = useContext(AuthContext);
    const {data} = useQuery(graphql, {
        variables: {
            "uid": "0IhNFZFa7QMwBY6yZT8l24L1AX32",
        }
    });

    useEffect(() => {
    }, [data]);

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
                <UserAvatar
                  photoURL={userInfo.photoURL}
                  displayName={userInfo.displayName}
                  showName={false}/>
                <img src={lvl} alt={t('user-level')} height="25"/>
                <h5>
                    <div>Level {console.log("data => ", data)} - Dice Explorer {userInfo.isLoggedIn}</div>
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
