import { combineEpics } from 'redux-observable';
import webSocketEpic from './webSocket';
import roomEpic from './room';

export default combineEpics(
  ...webSocketEpic,
  ...roomEpic,
);
