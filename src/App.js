import React, {useState} from "react";
import useStyles from "./css";
import Grid from '@material-ui/core/Grid';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import ProtectedRouteHoc from "./ProtectedRoutHoc";

import Header from "./Header";
import Footer from "./Footer";
import routes from "./routes";
import protectedRoutes from "./protectedRoutes";

export const AuthContext = React.createContext({
    displayName: null,
    email: null,
    emailVerified: null,
    uid: null,
    photoURL: null,
    isLoggedIn: false
});

export const SnackbarContext = React.createContext({
    open: false,
    text: 'Default Mensage',
    severity: 'info',
    showSnackbar: () => {
    },
    closeSnackbar: () => {
    }
})

const App = () => {
    const [userInfo, setUserInfo] = useState(false);
    const [snackbar, setSnackbar] = useState({open: false, text: 'Default Mensage'});
    const classes = useStyles();

    const showSnackbar = (text) => {
        setSnackbar({...snackbar, open: true, text: text});
    };

    const closeSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackbar({...snackbar, open: false});
    };

    return (
        <AuthContext.Provider value={{userInfo, setUserInfo}}>
            <SnackbarContext.Provider value={{snackbar, setSnackbar, showSnackbar, closeSnackbar}}>
                <SnackbarContext.Consumer>
                    {
                        ({snackbar, setSnackbar, showSnackbar, closeSnackbar}) => (
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
                                            {protectedRoutes.map(route => (
                                                <ProtectedRouteHoc
                                                    key={route.path}
                                                    isLoggedIn={userInfo.isLoggedIn}
                                                    path={route.path}
                                                    component={route.main}
                                                    exact={route.exact}
                                                    public={route.public}
                                                    {...{snackbar, setSnackbar, showSnackbar, closeSnackbar}}
                                                />
                                            ))}
                                            {routes.map(route => (
                                                <Route
                                                    key={route.path}
                                                    path={route.path}
                                                    exact={route.exact}
                                                    component={route.main}
                                                    {...{snackbar, setSnackbar, showSnackbar, closeSnackbar}}
                                                />
                                            ))}
                                        </Switch>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.footer}>
                                    <Footer/>
                                </Grid>
                            </Grid>
                        </BrowserRouter>
                        )
                    }
                </SnackbarContext.Consumer>
            </SnackbarContext.Provider>
        </AuthContext.Provider>
    );
};

export default App;
