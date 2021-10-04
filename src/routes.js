import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, Restaurant } from "Pages";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/restaurant/:id">
                <Restaurant />
            </Route>
            <Route>
                <p>{"Not Found"}</p>
            </Route>
        </Switch>
    );
};

export default Routes;
