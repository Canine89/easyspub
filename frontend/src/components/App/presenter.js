import React from "react";
import { Route, Switch } from "react-router-dom";

const App = (props) => [
  props.isLoggedIn ? <PrivateRoutes key={2} /> : <PublicRoutes key={2} />,
];

const PrivateRoutes = (props) => (
  <Switch>
    <Route path="/" exact render={() => "feed!"} />
    <Route path="/explore" render={() => "explore!"} />
  </Switch>
);

const PublicRoutes = (props) => (
  <Switch>
    <Route path="/" exact render={() => "login!"} />
    <Route path="/forgot" render={() => "password?"} />
  </Switch>
);

export default App;
