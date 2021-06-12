import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = [];

const getRoomList = createAction('GET_ROOM_LIST');
const roomListChanged = createAction('ROOM_LIST_CHANGED');

export default createReducer(initialState, (builder) => builder
  .addCase(getRoomList, (state, action) => action.payload)
  .addCase(roomListChanged, (state, action) => action.payload));
