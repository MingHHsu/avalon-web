import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import webSocket from './webSocket';
import room from './room';

export default (history) => combineReducers({
  router: connectRouter(history),
  webSocket,
  room,
});
