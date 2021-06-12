import { ofType } from 'redux-observable';
import { Subject, of, merge } from 'rxjs';
import {
  map,
  switchMap,
  takeUntil,
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
} from 'store/slices/webSocket';

let webSocketSubject = null;
const onOpenSubject = new Subject();
const onCloseSubject = new Subject();

const createWebSocket = ({ url }) => {
  webSocketSubject = webSocket({
    url,
    openObserver: onOpenSubject,
    closeObserver: onCloseSubject,
  });
  return webSocketSubject;
};

function connectEpic(action$) {
  return action$.pipe(
    ofType(connectWebSocket),
    switchMap((action) => createWebSocket(action.payload).pipe(
      map((msg) => receiveMessage(msg).payload),
      catchError((error) => of(disconnect(error))),
    )),
    takeUntil(action$.pipe(ofType(disconnect))),
  );
}

function connectedEpic(action$) {
  return action$.pipe(
    ofType(connectWebSocket),
    switchMap(({ payload }) => merge(
      onOpenSubject.pipe(
        map((event) => {
          if (payload.onOpen) payload.onOpen(event.target);
          return connected();
        }),
      ),
      onCloseSubject.pipe(
        map((event) => {
          if (payload.onClose) payload.onClose(event);
          return disconnect();
        }),
      ),
    )),
  );
}

function sendMessageEpic(action$) {
  return action$.pipe(
    ofType(sendMessage),
    map((action) => {
      webSocketSubject.next(action.payload);
      return sentMessage();
    }),
  );
}

function disconnectEpic(action$) {
  return action$.pipe(
    ofType(disconnect),
    mergeMap(() => {
      onCloseSubject.complete();
      webSocketSubject.complete();
      return [disconnected()];
    }),
  );
}

export default [
  connectEpic,
  connectedEpic,
  sendMessageEpic,
  disconnectEpic,
];
