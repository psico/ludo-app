import React, {useState, useContext} from "react";
import Button from '@material-ui/core/Button';
import {AuthContext} from "../App";
import firebase from "../firebase";
import {withRouter} from 'react-router-dom'
import useStyles from "./css";


const LoginFacebook = ({history}) => {

    const componentClasses = useStyles();

    const Auth = useContext(AuthContext);

    const [error, setErrors] = useState("");

    const signInWithFacebook = () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase
            .auth()
            .setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .then(() => {
                firebase
                    .auth()
                    .signInWithPopup(provider)
                    .then(result => {
                        console.log(result);
                        Auth.setLoggedIn(true);
                        history.push('/community');
                    })
                    .catch(e => setErrors(e.message))
            })

    };

    return (
        <div>
            <Button onClick={() => signInWithFacebook()}
                    variant="contained" type="button"
                    classes={{
                        root: componentClasses.root
                    }}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Facebook_icon_2013.svg"
                    alt="logo"
                    height={20}
                />&nbsp;Login With Facebook
            </Button>
            <span>{error}</span>
        </div>
    );
};

export default withRouter(LoginFacebook);
