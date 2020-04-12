import React from "react";

import Login from "./Login";
import Join from "./Join";
import Community from "./Community";

const routes = [
    { name: "Login", path: "/login", exact: true, main: () => <Login /> },
    { name: "Join", path: "/join", exact: true, main: () => <Join /> },
    { name: "Community", path: "/community", exact: true, main: () => <Community /> }
];

export default routes;
