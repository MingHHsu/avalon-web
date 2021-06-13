import { ofType } from 'redux-observable';
import { map } from 'rxjs/operators';
import { roomCreated } from 'store/slices/room';
import { push } from 'connected-react-router';

function roomCreatedEpic(action$) {
  return action$.pipe(
    ofType(roomCreated),
    map((action) => push(`/room/${action.payload.id}`)),
  );
}

export default [
  roomCreatedEpic,
];
