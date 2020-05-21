import React, {useState, useContext} from "react";
import Button from '@material-ui/core/Button';
import {AuthContext} from "../App";
import firebase from "../firebase";
import {withRouter} from 'react-router-dom'
import useStyles from "./css";


const LoginTwitter = ({history}) => {

    const componentClasses = useStyles();

    const Auth = useContext(AuthContext);

    const [error, setErrors] = useState("");

    const signInWithTwitter = () => {
        const provider = new firebase.auth.TwitterAuthProvider();
        firebase
            .auth()
            .setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .then(() => {
                firebase
                    .auth()
                    .signInWithPopup(provider)
                    .then(result => {
                        Auth.setUserInfo({
                            displayName: result.displayName,
                            email: result.email,
                            emailVerified: result.emailVerified,
                            uid: result.uid,
                            photoURL: result.photoURL,
                            isLoggedIn: true
                        });
                        history.push('/community');
                    })
                    .catch(e => setErrors(e.message))
            })

    };

    return (
        <div>
            <Button onClick={() => signInWithTwitter()}
                    variant="contained" type="button"
                    classes={{
                        root: componentClasses.root
                    }}>
                <img
                    src="https://cdn.worldvectorlogo.com/logos/twitter.svg"
                    alt="logo"
                    height={20}
                />&nbsp;Login With Twitter
            </Button>
            <span>{error}</span>
        </div>
    );
};

export default withRouter(LoginTwitter);
