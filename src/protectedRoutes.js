import React from 'react';
import Community from "./Community";
import AddMatch from "./AddMatch";

const protectedRoutes = [
    {name: 'Community', path: '/community', exact: true, main: props => <Community {...props} />, public: false},
    {name: 'Add Match', path: '/addMatch', exact: true, main: props => <AddMatch {...props} />, public: false},
];

export default protectedRoutes;
