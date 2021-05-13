import React from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom';
import {bool, any, object} from 'prop-types';

const ProtectedRouteHoc = ({component: Component, isLoggedIn, ...rest}) => {
    const storage = JSON.parse(localStorage.getItem("userInfo"));

    fetch('http://localhost:4000/verifyToken', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            idToken: storage.token
        })
    }).then(data => data.json())

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
