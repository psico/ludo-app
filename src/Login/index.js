import React, { useState, useContext } from "react";
import useStyles from "./css";
import Grid from "@material-ui/core/Grid";
import { AuthContext } from "../App";
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
            .signInWithEmailAndPassword(email,password)
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
                <h1>Is Logged? {Auth.isLoggedIn.toString()}</h1>
                <h1>Login</h1>
                <form onSubmit={e => handleForm(e)}>
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
                    <button className="googleBtn" type="button">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                            alt="logo"
                        />
                        Login With Google
                    </button>
                    <button type="submit">Login</button>
                    <span>{error}</span>
                </form>
            </Grid>
        </div>
    );
};

export default Login;
