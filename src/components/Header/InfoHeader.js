import React, { useContext, useEffect } from 'react';
import componentStyles from "./css";
import LinearProgress from '@material-ui/core/LinearProgress';
import {lighten, withStyles} from '@material-ui/core/styles';
import UserAvatar from "../UserAvatar";
import {AuthContext} from "../../App";
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom/cjs/react-router-dom';

const graphql = gql`
    query userExperienceInfo($uid: ID!){
        userExperienceInfo(uid: $uid) {
            totalExperience
            level
            nextLevelExperience
        }
    }
`;

const InfoHeader = () => {
    const classes = componentStyles();
    const [completed, setCompleted] = React.useState(0);
    const {userInfo} = useContext(AuthContext);
    const {data} = useQuery(graphql, {
        variables: { uid: useParams()?.id }
    });

    const calculatePercentBar = (() => {
        setCompleted((100*data?.userExperienceInfo?.nextLevelExperience)/data?.userExperienceInfo?.totalExperience);
    });

    useEffect(() => {
        console.log("useParams()?.id ==> ", useParams)
        calculatePercentBar();
    }, [calculatePercentBar, data]);

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
                {/*<img src={lvl} alt={t('user-level')} height="25"/>*/}
                <h5>
                    <div>Level {data?.userExperienceInfo?.level} - Dice Explorer {userInfo.isLoggedIn}</div>
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
