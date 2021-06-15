import { createAction, createReducer } from '@reduxjs/toolkit';
import { mergeDeepRight } from 'ramda';

const initialState = {
  notFound: {
    message: '',
  },
};

export const roomNotFound = createAction('ROOM_NOT_FOUND');

export default createReducer(initialState, (builder) => builder
  .addCase(roomNotFound, (state, action) => mergeDeepRight(
    state,
    { notFound: { message: action.payload } },
  )));
