import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { webSocket } from 'rxjs/webSocket';
import {
  connectWebSocket,
  receiveMessage,
  disconnect,
} from 'store/slices/webSocket';

const createWebSocket = ({ url }) => webSocket(url);

export function web() {
}

export function webSocketEpic(action$) {
  return action$.pipe(
    ofType(connectWebSocket),
    switchMap((action) => createWebSocket(action.payload).pipe(
      map(receiveMessage),
      catchError((error) => of(disconnect(error))),
    )),
  );
}
