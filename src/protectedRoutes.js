import React from 'react';
import Community from "./Community";
import AddMatch from "./page/AddMatch";
import GameRegister from "./GameRegister";

const protectedRoutes = [
    {name: 'Community', path: '/community', exact: true, main: props => <Community {...props} />, public: false},
    {name: 'Add Match', path: '/addMatch', exact: true, main: props => <AddMatch {...props} />, public: false},
    {name: 'Game Register', path: '/gameRegister', exact: true, main: props => <GameRegister {...props} />, public: false}
];

export default protectedRoutes;
