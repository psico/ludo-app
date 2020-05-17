import React, { useState, useContext } from "react";
import useStyles from "./css";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import {AuthContext} from "../App";
import firebase from "../firebase";
import LoginFacebook from "../LoginFacebook";
import LoginTwitter from "../LoginTwitter";
import LoginGoogle from "../LoginGoogle";

const Join = () => {
    const componentClasses = useStyles();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setErrors] = useState("");

    const Auth = useContext(AuthContext);
    const handleForm = e => {
        e.preventDefault();
        firebase
            .auth()
            .createUserWithEmailAndPassword(email,password)
            .then(res => {
                if (res.user) {
                    Auth.setLoggedIn(true);
                }
            })
            .catch(e => {
                setErrors(e.message);
            });
        console.log(Auth);
        Auth.setLoggedIn(true);
    };

    return (
        <div className={componentClasses.root}>
            <Grid container spacing={0}>

                    <form onSubmit={e => handleForm(e)}>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={componentClasses.item}>
                            <LoginFacebook/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={componentClasses.item}>
                            <LoginTwitter/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={componentClasses.item}>
                            <LoginGoogle/>
                        </Grid>
                        <h3>Login</h3>
                        <input
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            name="email"
                            type="email"
                            placeholder="email"
                        />
                        <input
                            onChange={e => setPassword(e.target.value)}
                            name="password"
                            value={password}
                            type="password"
                            placeholder="password"
                        />
                        <hr/>
                        <Button variant="contained" color="primary" type="submit">Join</Button>
                        <span>{error}</span>
                    </form>
            </Grid>
        </div>
    );
};

export default Join;
