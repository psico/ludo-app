import React from "react";
import useStyles from "./css";
import firebase from "./firebase";
import Grid from '@material-ui/core/Grid';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {withStyles} from "@material-ui/core/styles";

import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import Community from "./Community";
import routes from "./routes";

const App = () => {
    const classes = useStyles();

    return (
        <BrowserRouter>
            <Grid container className={classes.root}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Header/>
                </Grid>
                <Grid container
                      direction="column"
                      justify="center"
                      alignItems="center">
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Switch>
                            {routes.map(route => (
                                <Route
                                    key={route.path}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.main}
                                />
                            ))}
                        </Switch>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Footer/>
                </Grid>
            </Grid>
        </BrowserRouter>
    );
};

export default withStyles()(App);
