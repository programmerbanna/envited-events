import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home";

const App = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="flex items-center justify-center w-full container mx-auto overflow-hidden">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
