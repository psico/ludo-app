import React, {useState, useContext} from "react";
import useStyles from "./css";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import {AuthContext} from "../../App";
import {withRouter} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import LoginGoogle from "../../components/LoginGoogle";
import LoginFacebook from "../../components/LoginFacebook";
import LoginTwitter from "../../components/LoginTwitter";

async function loginUser(credentials) {
    try {
        console.log("request user login...")
        const data = await fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    email: credentials.email,
                    password: credentials.password
                }
            })
        })

        return data.json();
    } catch (error) {
        console.error("Error with user login", error.message());
    }
}

export async function loginCredential(credential) {
    try {
        console.log("request login provider...")
        const data = await fetch('http://localhost:4000/loginCredential', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credential)
        });

        console.log("result login credential")
        return formatUserInfo((await data.json()).user);
    } catch (error) {
        console.error("Error with login credentials", error.message());
    }
}

export async function verifyToken(idToken) {
    try {
        console.log("request verify token...")
        const data = await fetch('http://localhost:4000/verifyToken', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({idToken})
        });

        return data.json();
    } catch (error) {
        console.error("Error with request verify token", error.message());
    }
}

export async function getCurrentUser() {
    try {
        console.log("Trying to get current user...");
        const data = await fetch('http://localhost:4000/currentUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (data.status === 200) {
            return data.json();
        }
        return null;
    } catch (error) {
        console.error("Error with request current user", error.message());
        return null;
    }
}

export function formatUserInfo(user) {
    return {
        displayName: user.displayName ? user.displayName : user.email,
        email: user.email,
        emailVerified: user.emailVerified,
        uid: user.uid,
        photoURL: user.photoURL,
        isLoggedIn: true,
        token: user.token
    }
}

const Login = ({history}) => {
    const componentClasses = useStyles();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setErrors] = useState("");
    const {t} = useTranslation();

    const Auth = useContext(AuthContext);

    const handleForm = async e => {
        try {
            e.preventDefault();

            const result = await loginUser({email, password});
            if (result.user) {
                Auth.setUserInfo(formatUserInfo(result.user));
                history.push('/community');
            }
        }
        catch (error) {
            console.error("Error on login: ", error);
            setErrors(error);
        }
    };

    return (
        <Grid container spacing={0} className={componentClasses.root}>
            <form onSubmit={e => handleForm(e)}>
                <h1>{t('login')}</h1>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={componentClasses.item}>
                    <LoginFacebook/>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={componentClasses.item}>
                    <LoginTwitter/>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={componentClasses.item}>
                    <LoginGoogle/>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <hr/>
                    <h3>{t('email-login')}</h3>
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        name="email"
                        type="email"
                        placeholder={t('email')}
                    />
                    <input
                        onChange={e => setPassword(e.target.value)}
                        name="password"
                        value={password}
                        type="password"
                        placeholder={t('password')}
                    />

                    <Button variant="contained" color="primary" type="submit">{t('login')}</Button>
                    <Button variant="contained" color="primary" type="button" onClick={(e) => {
                        e.preventDefault();
                        history.push('/join');
                    }}>{t('join')}</Button>
                </Grid>
                <span>{error}</span>
            </form>
        </Grid>
    );
};

export default withRouter(Login);
