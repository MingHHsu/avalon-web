import { ofType } from 'redux-observable';
import { map, mapTo } from 'rxjs/operators';
import { roomCreated } from 'store/slices/room';
import { roomNotFound } from 'store/slices/errorHandler';
import { push } from 'connected-react-router';

function roomCreatedEpic(action$) {
  return action$.pipe(
    ofType(roomCreated),
    map((action) => push(`/room/${action.payload.id}`)),
  );
}

function roomNotFoundEpic(action$) {
  return action$.pipe(
    ofType(roomNotFound),
    mapTo(push('/notFound')),
  );
}

export default [
  roomCreatedEpic,
  roomNotFoundEpic,
];
