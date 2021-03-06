import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LogIn from "./LogIn";
import App from "./App";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LogIn} />
      <Route path="/session/:userId" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
