import React, {useState, useContext} from "react";
import Button from '@material-ui/core/Button';
import {AuthContext} from "../App";
import firebase from "../firebase";
import {withRouter} from 'react-router-dom'
import useStyles from "./css";


const LoginGoogle = ({history}) => {

    const componentClasses = useStyles();

    const Auth = useContext(AuthContext);

    const [error, setErrors] = useState("");

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase
            .auth()
            .setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .then(() => {
                firebase
                    .auth()
                    .signInWithPopup(provider)
                    .then(result => {
                        console.log(result.user);
                        console.log(Auth);
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
            <Button onClick={() => signInWithGoogle()}
                    variant="contained" type="button"
                    classes={{
                        root: componentClasses.root
                    }}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    alt="logo"
                    height={20}
                />&nbsp;Login With Google
            </Button>
            <span>{error}</span>
        </div>

    );
};

export default withRouter(LoginGoogle);
