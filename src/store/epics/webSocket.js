import { ofType } from 'redux-observable';
import {
  of,
  merge,
  Subject,
} from 'rxjs';
import {
  map,
  switchMap,
  catchError,
  mergeMap,
} from 'rxjs/operators';
import { webSocket } from 'rxjs/webSocket';
import {
  connectWebSocket,
  connected,
  disconnect,
  disconnected,
  sendMessage,
  sentMessage,
  receiveMessage,
  isClosed,
} from 'store/slices/webSocket';

let webSocket$ = null;
let onOpen$ = new Subject();
let onClose$ = new Subject();

const webSocketConnection$ = ({ url }) => {
  onOpen$ = new Subject();
  onClose$ = new Subject();
  webSocket$ = webSocket({
    url,
    openObserver: onOpen$,
    closeObserver: onClose$,
  });
  return webSocket$;
};

function connectEpic(action$) {
  return action$.pipe(
    ofType(connectWebSocket),
    switchMap((action) => {
      const { payload } = action;
      return merge(
        webSocketConnection$(payload).pipe(
          map((msg) => receiveMessage(msg).payload),
          catchError((error) => of(disconnect(error))),
        ),
        onOpen$.pipe(
          map((event) => {
            if (payload.onOpen) payload.onOpen(event.target);
            return connected();
          }),
        ),
        onClose$.pipe(
          map((event) => {
            if (payload.onClose) payload.onClose(event.target);
            return isClosed();
          }),
        ),
      );
    }),
  );
}

function sendMessageEpic(action$) {
  return action$.pipe(
    ofType(sendMessage),
    map((action) => {
      webSocket$.next(action.payload);
      return sentMessage();
    }),
  );
}

function disconnectEpic(action$) {
  return action$.pipe(
    ofType(disconnect),
    mergeMap(() => {
      webSocket$.complete();
      return [disconnected()];
    }),
  );
}

export default [
  connectEpic,
  sendMessageEpic,
  disconnectEpic,
];
