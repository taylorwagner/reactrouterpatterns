import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Color from './Color';
import ColorList from './ColorList';
import NewColorForm from './NewColorForm';

function Routes() {
    const initialColors = {
        red: "#FF0000",
        green: "#00FF00",
        blue: "#0000FF"
      };

    const [colors, updateColors] = useState(initialColors);

    function handleAdd(newColor) {
        updateColors(prev => ({ ...prev, ...newColor }));
    }

    return (
        <Switch>
            <Route exact path="/colors/new">
                <NewColorForm addColor={handleAdd}/>
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