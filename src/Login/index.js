import React, {useState, useContext} from "react";
import useStyles from "./css";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import {AuthContext} from "../App";
import firebase from "../firebase";
import { withRouter } from 'react-router-dom'
import LoginGoogle from "../LoginGoogle";


const Login = ({history}) => {
    const componentClasses = useStyles();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setErrors] = useState("");

    const Auth = useContext(AuthContext);

    const handleForm = e => {
        e.preventDefault();

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(res => {
                console.log(res.user);
                //@TODO every time this turn in true
                if (res.user) {
                    Auth.setLoggedIn(true);
                    history.push('/community');
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
                    <h1>Login</h1>
                    <LoginGoogle/>
                    <hr/>
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

                    <Button variant="contained" type="submit">Login</Button>
                    <span>{error}</span>
                </form>
            </Grid>
        </div>
    );
};

export default withRouter(Login);
