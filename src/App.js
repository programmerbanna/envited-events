import React from "react";
import { Switch, Route } from "react-router-dom";
import Event from "./views/Event";
import Home from "./views/Home";

const App = () => {
  return (
    <div className="w-full h-screen">
      <div className="flex items-center justify-center w-full h-full container mx-auto overflow-hidden">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/event">
            <Event />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
