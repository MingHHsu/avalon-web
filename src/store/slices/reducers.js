import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import webSocket from './webSocket';
import room from './room';
import errorHandler from './errorHandler';

export default (history) => combineReducers({
  router: connectRouter(history),
  webSocket,
  room,
  errorHandler,
});
