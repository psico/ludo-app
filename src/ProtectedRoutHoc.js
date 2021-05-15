import React, {useContext} from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom';
import {bool, any, object} from 'prop-types';
import {getCurrentUser, verifyToken} from "./page/Login";
import {AuthContext} from "./App";

const ProtectedRouteHoc = ({component: Component, isLoggedIn, ...rest}) => {
    // const Auth = useContext(AuthContext);
    if (isLoggedIn || rest.public) {
        console.log("User logged");
        return (
            <Route
                {...rest}
                render={props => {
                    return (<Component {...props} />);
                }}
            />
        );
    }
    // else {
        // console.log("Retreving current user");
        // const idToken = localStorage.getItem("idToken");
        // if (idToken) {
        // getCurrentUser().then(result => {
        //     Auth.setUserInfo({
        //         displayName: result.user.displayName ? result.user.displayName : result.user.email,
        //         email: result.user.email,
        //         emailVerified: result.user.emailVerified,
        //         uid: result.user.uid,
        //         photoURL: result.user.photoURL,
        //         isLoggedIn: true,
        //         token: result.user.token
        //     });
        // });

        // return (
        //     <Route
        //         {...rest}
        //         render={props => {
        //             return (<Component {...props} />);
        //         }}
        //     />
        // );
        // }
    // }

    console.log("Login redirect");
    return <Redirect to={{pathname: '/'}}/>;
};

ProtectedRouteHoc.propTypes = {
    component: any,
    isLoggedIn: bool,
    rest: object,
    props: object,
};

export default withRouter(ProtectedRouteHoc);
