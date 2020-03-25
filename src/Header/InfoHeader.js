import React from "react";
import Avatar from '@material-ui/core/Avatar';
import useStyles from "./css";
import jg from '../temp-images/tempImage.jpg';
import lvl from "../temp-images/lvl-coronel.png";
import LinearProgress from '@material-ui/core/LinearProgress';
import { lighten, withStyles } from '@material-ui/core/styles';

const InfoHeader = () => {
    const classes = useStyles();
    const [completed] = React.useState(30);

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
        <div className={classes.infoHeader}>
            <Avatar variant="rounded" alt="João Gabriel" src={jg} className={classes.small} />
            <img src={lvl} alt="user lvl" height="25"/>
            <h5>
                <div>Level 30 - Dice Explorer</div>
                <BorderLinearProgress
                    className={classes.margin}
                    variant="determinate"
                    color="secondary"
                    value={completed}
                />
            </h5>
        </div>
    );
};

export default InfoHeader;
