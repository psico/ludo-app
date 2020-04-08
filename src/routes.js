import React from "react";
import Login from "./Login";
import Community from "./Community";
// import Join from "./Join";

const routes = [
    { name: "Login", path: "/login", exact: true, main: () => <Login /> },
    { name: "Community", path: "/community", exact: true, main: () => <Community /> }
];

export default routes;
