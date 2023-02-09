import React, { useState } from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

import Color from "./Color";
import Colors from "./Colors";
import ColorForm from "./ColorForm";

function Routes() {
    const [colors, setColors] = useState();

    const addColor = setColors(newColor)


  return (
    <BrowserRouter>
        <Switch>
            <Route exact path='/colors'><Colors colors={colors}/></Route>
            <Route exact path='/colors/:color'><Color /></Route>
            <Route exact path='/colors/new'><ColorForm addColor={addColor}/></Route>
            <Redirect to='/colors' />
        </Switch>
    </BrowserRouter>
  );
}

export default Routes;
