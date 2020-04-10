import React, { useState, useContext } from "react";
import useStyles from "./css";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import {AuthContext} from "../App";

const Login = () => {
    const componentClasses = useStyles();

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [error, setErrors] = useState("");

    const Auth = useContext(AuthContext);
    const handleForm = e => {
        e.preventDefault();
        console.log(Auth);
        Auth.setLoggedIn(true);
    };

    return (
        <div className={componentClasses.root}>
            <Grid container spacing={0}>
                <div>
                    <h1>Login</h1>
                    <form onSubmit={e => handleForm(e)}>
                        {/*<input*/}
                        {/*    value={email}*/}
                        {/*    onChange={e => setEmail(e.target.value)}*/}
                        {/*    name="email"*/}
                        {/*    type="email"*/}
                        {/*    placeholder="email"*/}
                        {/*/>*/}
                        {/*<input*/}
                        {/*    onChange={e => setPassword(e.target.value)}*/}
                        {/*    name="password"*/}
                        {/*    value={password}*/}
                        {/*    type="password"*/}
                        {/*    placeholder="password"*/}
                        {/*/>*/}
                        <hr/>
                        <Button variant="contained" color="primary" type="button">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                alt="logo"
                                height={20}
                            />
                             Login With Google
                        </Button>
                        {/*<button type="submit">Login</button>*/}
                        {/*<span>{error}</span>*/}
                    </form>
                </div>
            </Grid>
        </div>
    );
};

export default Login;
