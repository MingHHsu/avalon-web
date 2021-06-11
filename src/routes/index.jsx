import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Landing from 'pages/Landing';
import LobbyRoute from './LobbyRoute';

export default () => (
  <Switch>
    <Route exact path="/" component={() => <Redirect to="/landing" />} />
    <Route exact path="/landing" component={Landing} />
    <LobbyRoute exact path="/lobby" component={Landing} />
  </Switch>
);
