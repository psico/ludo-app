import React from "react";
import Avatar from '@material-ui/core/Avatar';
import componentStyles from "./css";
import jg from '../temp-images/tempImage.jpg';

const UserAvatar = (props) => {
    const classes = componentStyles();
    const [user] = React.useState({
        idUser: props.idUser,
        name: "João Gabriel",
        srcImage: jg,
        showName: props.showName,
        showImage: true
    });

    // setUser({
    //     idUser: 10,
    //     name: "João Gabriel",
    //     srcImage: jg,
    //     showName: true,
    //     showImage: true
    // });

    return (
        <div className={classes.root}>
            <Avatar variant="rounded" alt={user.name} src={user.srcImage} className={classes.small}/>
            {user.showName === true && <div className={classes.textAvatar}>{user.name}</div>}
        </div>
    );
};

export default UserAvatar;
