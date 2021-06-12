import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import webSocket from './webSocket';
import rooms from './rooms';

export default (history) => combineReducers({
  router: connectRouter(history),
  webSocket,
  rooms,
});
