import React from "react";
import {HOME_PAGE, LOGIN_PAGE, MAP_PAGE, REGISTRATION_PAGE} from "./utils/consts";
import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";
import LoginPage from "./pages/LoginPage";


interface Route {
    path: string;
    Component: React.ComponentType;
}

export const routes: Route[] = [
    {
        path: HOME_PAGE,
        Component: HomePage
    },
    {
        path: MAP_PAGE,
        Component: MapPage
    },
    {
        path: LOGIN_PAGE,
        Component: LoginPage
    },
    {
        path: REGISTRATION_PAGE,
        Component: LoginPage
    }
]