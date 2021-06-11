import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const {
  actions,
  reducer,
} = createSlice({
  name: 'webSocket',
  initialState,
  reducers: {
    connectWebSocket(state) {
      return state;
    },
    receiveMessage(state) {
      return state;
    },
    disconnect(state) {
      return state;
    },
  },
});

export const {
  connectWebSocket,
  receiveMessage,
  disconnect,
} = actions;

export default reducer;
