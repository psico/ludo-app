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
        showName: true,
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
        <div>
            <Avatar variant="rounded" alt={user.name} src={user.srcImage} className={classes.small}/>
        </div>
    );
};

export default UserAvatar;
