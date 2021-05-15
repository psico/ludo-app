import React from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom';
import {bool, any, object} from 'prop-types';

const ProtectedRouteHoc = ({component: Component, isLoggedIn, ...rest}) => {

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

    console.log("Redirect to Login ");
    return <Redirect to={{pathname: '/'}}/>;
};

ProtectedRouteHoc.propTypes = {
    component: any,
    isLoggedIn: bool,
    rest: object,
    props: object,
};

export default withRouter(ProtectedRouteHoc);
