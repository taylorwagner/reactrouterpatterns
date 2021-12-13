import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Color from './Color';
import ColorList from './ColorList';
import NewColorForm from './NewColorForm';

function Routes({colors}) {
    return (
        <Switch>
            <Route exact path="/colors/new">
                <NewColorForm />
            </Route>
            <Route exact path="/colors/:color">
                <Color colors={colors} />
            </Route>
            <Route exact path="/colors">
                <ColorList colors={colors} />
            </Route>
            <Redirect to="/colors"></Redirect>
        </Switch>
    );
}

export default Routes;