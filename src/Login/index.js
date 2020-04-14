import React, {useState, useContext} from "react";
import useStyles from "./css";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import {AuthContext} from "../App";
import firebase from "../firebase";


const Login = () => {
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
                    history.push('/community')
                }
            })
            .catch(e => {
                setErrors(e.message);
            });

        console.log(Auth);
        Auth.setLoggedIn(true);
    };

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
                        console.log(result);
                        Auth.setLoggedIn(true);
                        history.push('/community');
                    })
                    .catch(e => setErrors(e.message))
            })

    };

    return (
        <div className={componentClasses.root}>
            <Grid container spacing={0}>
                <form onSubmit={e => handleForm(e)}>
                    <h1>Login</h1>
                    <Button onClick={() => signInWithGoogle()} variant="contained" type="button">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                            alt="logo"
                            height={20}
                        />&nbsp;Login With Google
                    </Button>
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

export default Login;
