import React from 'react';
import Community from "./page/Community";
import AddMatch from "./page/AddMatch";
import GameRegister from "./page/GameRegister";
import Profile from "./page/Profile";
import Search from './page/Search';
import Match from './page/ShowMatch';

const protectedRoutes = [
    {name: 'Add Match', path: '/addMatch', exact: true, main: props => <AddMatch {...props} />, public: false},
    {name: 'Community', path: '/community', exact: true, main: props => <Community {...props} />, public: false},
    {name: 'Game Register', path: '/gameRegister', exact: true, main: props => <GameRegister {...props} />, public: false},
    {name: 'Match', path: '/showMatch/:id', exact: true, main: props => <Match {...props} />, public: false},
    {name: 'Profile', path: '/profile/:id', main: props => <Profile {...props} />, public: false},
    {name: 'Search', path: '/search/:search', main: props => <Search {...props} />, public: false}
];

export default protectedRoutes;
