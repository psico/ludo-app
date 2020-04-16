import React from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom';
import {bool, any, object} from 'prop-types';

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
    return <Redirect to={{pathname: '/'}}/>;
};

ProtectedRouteHoc.propTypes = {
    component: any,
    isLoggedIn: bool,
    rest: object,
    props: object,
};

export default withRouter(ProtectedRouteHoc);
