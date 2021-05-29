import React, {useEffect, useState} from "react";
import useStyles from "./css";
import Grid from '@material-ui/core/Grid';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import ProtectedRouteHoc from "./ProtectedRoutHoc";

import Header from "./components/Header";
import Footer from "./components/Footer";
import routes from "./routes";
import protectedRoutes from "./protectedRoutes";
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';
import {createHttpLink} from "apollo-link-http";
import {getCurrentUser} from "./page/Login";

export const AuthContext = React.createContext({
    displayName: null,
    email: null,
    emailVerified: null,
    uid: null,
    photoURL: null,
    isLoggedIn: false
});

const {REACT_APP_API_URL} = process.env;
const httpLink = createHttpLink({
    uri: `${REACT_APP_API_URL}/graphql`
})

export const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

const App = () => {
    const [userInfo, setUserInfo] = useState({
        displayName: null,
        email: null,
        emailVerified: null,
        uid: null,
        photoURL: null,
        isLoggedIn: false,
        token: null
    });
    const [state, setState] = useState(false);
    const classes = useStyles();

    useEffect(() => {

        getCurrentUser().then(userInfo => {
            console.log("Returning current user", userInfo);
            if (userInfo) {
                setUserInfo(userInfo);
            }
            setState(true);
        });
    }, [state]);
    if (state === false) {
        return <p>wait a minute</p>;
    } else {
        return (
            <AuthContext.Provider value={{userInfo, setUserInfo}}>
                <ApolloProvider client={client}>
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
                                            />
                                        ))}
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
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.footer}>
                                <Footer/>
                            </Grid>
                        </Grid>
                    </BrowserRouter>

                </ApolloProvider>
            </AuthContext.Provider>
        );
    }
};

export default App;
