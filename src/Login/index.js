import React from "react";
import useStyles from "./css";
import Grid from "@material-ui/core/Grid";

const Login = () => {
    const componentClasses = useStyles();

    return (
        <div className={componentClasses.root}>
            <Grid container spacing={0}>
            </Grid>
        </div>
    );
};

export default Login;
