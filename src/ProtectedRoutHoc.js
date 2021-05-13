import React from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom';
import {bool, any, object} from 'prop-types';
import {verifyToken} from "./page/Login";

const ProtectedRouteHoc = ({component: Component, isLoggedIn, ...rest}) => {

    if (isLoggedIn || rest.public) {
        return (
            <Route
                {...rest}
                render={props => {
                    return (<Component {...props} />);
                }}
            />
        );
    }

    const idToken = localStorage.getItem("idToken");
    if (idToken) {
        verifyToken(idToken).then(data => console.log("data:", data));
    }

    return <Redirect to={{pathname: '/'}}/>;
};

ProtectedRouteHoc.propTypes = {
    component: any,
    isLoggedIn: bool,
    rest: object,
    props: object,
};

export default withRouter(ProtectedRouteHoc);
