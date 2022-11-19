import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import DeliveryPage from "./pages/DeliveryPage";
import AutonomusPage from "./pages/AutonomusPage";
import BiologyPage from "./pages/BiologyPage";
import TestPage from "./pages/TestPage";


const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path="/services">
                <ServicesPage/>
            </Route>
            <Route exact path="/delivery">
                <DeliveryPage/>
            </Route>
            <Route exact path="/autonomus">
                <AutonomusPage/>
            </Route>
            <Route exact path="/biology">
                <BiologyPage/>
            </Route>
            <Route exact path="/test">
                <TestPage/>
            </Route>
        </Switch>
    );
};

export default Routes;
