import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home";

const App = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="max-h-2xl h-full">
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
