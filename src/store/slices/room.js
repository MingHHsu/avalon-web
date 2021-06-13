import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  current: null,
};

const getRoomList = createAction('GET_ROOM_LIST');
const roomListChanged = createAction('ROOM_LIST_CHANGED');
const playersChanged = createAction('PLAYERS_CHANGED');
export const roomCreated = createAction('ROOM_CREATED');

export default createReducer(initialState, (builder) => builder
  .addCase(getRoomList, (state, action) => ({
    ...state,
    list: action.payload,
  }))
  .addCase(roomListChanged, (state, action) => ({
    ...state,
    list: action.payload,
  }))
  .addCase(playersChanged, (state, action) => ({
    ...state,
    current: action.payload,
  }))
  .addCase(roomCreated, (state) => state));
