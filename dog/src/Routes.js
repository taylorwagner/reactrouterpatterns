import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import DogList from './DogList';
import FilterDogDetails from './FilterDogDetails';

function Routes({dogs}) {
    return (
        <Switch>
            <Route exact path="/dogs/:name">
                <FilterDogDetails dogs={dogs} />
            </Route>
            <Route exact path="/dogs">
                <DogList dogs={dogs} />
            </Route>
            <Redirect to="/dogs"></Redirect>
        </Switch>
    );
}

export default Routes;