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

    const [error, setErrors] = useState();
    const Auth = useContext(AuthContext);
    const {t} = useTranslation();

    const signInWithGoogle = async () => {
        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            const credential = await firebase.auth().signInWithPopup(provider);
            const userInfo = await loginCredential(credential);

            if (userInfo) {
                Auth.setUserInfo(userInfo);
                history.push('/community');
            }
        }
        catch (error) {
            setErrors(error);
            console.error("Error on try loggin with Google");
        }
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
