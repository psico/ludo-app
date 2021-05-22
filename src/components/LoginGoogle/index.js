import React, {useState, useContext} from "react";
import Button from '@material-ui/core/Button';
import {AuthContext} from "../../App";
import firebase from "../../firebase";
import {withRouter} from 'react-router-dom'
import useStyles from "./css";
import {useTranslation} from "react-i18next";
import {loginCredential} from "../../page/Login";


const LoginGoogle = ({history}) => {

    const componentClasses = useStyles();

    const [error, setErrors] = useState("");
    const Auth = useContext(AuthContext);
    const { t } = useTranslation();

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        // // firebase.auth().languageCode = 'it';
        // console.log("aki", provider);
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                let credential = result.credential;

                console.log("credential ", result);

                // This gives you a Google Access Token. You can use it to access the Google API.
                // var token = credential.accessToken;
                // The signed-in user info.
                // var user = result.user;
                // ...


                loginCredential(result).then(async result => {
                    console.log("testing back result ", result.user);
                    if (result.user) {
                        Auth.setUserInfo({
                            displayName: result.user.displayName ? result.user.displayName : result.user.email,
                            email: result.user.email,
                            emailVerified: result.user.emailVerified,
                            uid: result.user.uid,
                            photoURL: result.user.photoURL,
                            isLoggedIn: true,
                            token: result.user.token
                        });
                        // localStorage.setItem("idToken", result.user.token);
                        // setToken(result.user.token);
                        history.push('/community');
                    }
                }).catch(e => {
                    setErrors(e.message);
                });



            }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });



        // firebase
        //     .auth()
        //     .setPersistence(firebase.auth.Auth.Persistence.SESSION)
        //     .then(() => {
        //         firebase
        //             .auth()
        //             .signInWithPopup(provider)
        //             .then(result => {
        //                 Auth.setUserInfo({
        //                     displayName: result.user.displayName,
        //                     email: result.user.email,
        //                     emailVerified: result.user.emailVerified,
        //                     uid: result.user.uid,
        //                     photoURL: result.user.photoURL,
        //                     isLoggedIn: true
        //                 });
        //                 history.push('/community');
        //             })
        //             .catch(e => setErrors(e.message))
        //     })

        // loginProvider(provider).then(async result => {
        //     if (result.user) {
        //         Auth.setUserInfo({
        //             displayName: result.user.displayName ? result.user.displayName : result.user.email,
        //             email: result.user.email,
        //             emailVerified: result.user.emailVerified,
        //             uid: result.user.uid,
        //             photoURL: result.user.photoURL,
        //             isLoggedIn: true,
        //             token: result.user.token
        //         });
        //         // localStorage.setItem("idToken", result.user.token);
        //         // setToken(result.user.token);
        //         history.push('/community');
        //     }
        // }).catch(e => {
        //     setErrors(e.message);
        // });
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
                />&nbsp;{t('login-with-google')}
            </Button>
            <span>{error}</span>
        </div>

    );
};

export default withRouter(LoginGoogle);
