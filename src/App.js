import React from "react";
import {withStyles} from "@material-ui/core/styles";
import Header from "./Header";
import Footer from "./Footer";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Community from "./Community";
import "./index.css";
import useStyles from "./css";
import Grid from '@material-ui/core/Grid';

const App = () => {
    const classes = useStyles();

    return (
        <BrowserRouter>
            <Grid container className={classes.root}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Header/>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Switch>
                        <Route path="/">
                            <Community/>
                        </Route>
                    </Switch>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Footer/>
                </Grid>
            </Grid>
        </BrowserRouter>
    );
};

export default withStyles(styles)(App);
