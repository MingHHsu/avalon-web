import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import webSocket from './webSocket';

export default (history) => combineReducers({
  router: connectRouter(history),
  webSocket,
});
