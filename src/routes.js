import React from "react";
import Join from "./Join";
import Community from "./Community";

const routes = [
    { name: "Join", path: "/join", exact: true, main: () => <Join /> },
    { name: "Community", path: "/community", exact: true, main: () => <Community /> }
];

export default routes;
