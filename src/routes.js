import React from "react";

import Login from "./page/Login";
import Join from "./page/Join";


const routes = [
    { name: "Login", path: "/", exact: true, main: () => <Login /> },
    { name: "Join", path: "/join", exact: true, main: () => <Join /> }
];

export default routes;
