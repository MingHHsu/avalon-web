import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Landing from 'pages/Landing';
import Lobby from 'pages/Lobby';
import GameRoom from 'pages/GameRoom';
import NotFound from 'pages/NotFound';
import LobbyRoute from './LobbyRoute';
import GameRoomRoute from './GameRoomRoute';

export default () => (
  <Switch>
    <Route exact path="/" component={() => <Redirect to="/landing" />} />
    <Route exact path="/landing" component={Landing} />
    <LobbyRoute exact path="/lobby" component={Lobby} />
    <GameRoomRoute exact path="/room/:id" component={GameRoom} />
    <Route exact path="/notFound" component={NotFound} />
  </Switch>
);
