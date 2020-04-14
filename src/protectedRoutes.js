import React from 'react';
import Community from "./Community";

const protectedRoutes = [
    {name: 'Community', path: '/community', exact: true, main: props => <Community {...props} />, public: false},
];

export default protectedRoutes;
