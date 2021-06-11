import { combineEpics } from 'redux-observable';
import { webSocketEpic } from './webSocket';

export default combineEpics(
  webSocketEpic,
);
