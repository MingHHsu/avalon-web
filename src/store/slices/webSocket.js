import { createSlice } from '@reduxjs/toolkit';

const CONNECTING = 'CONNECTING';
const OPEN = 'OPEN';
const CLOSE = 'CLOSE';

const initialState = {
  url: null,
  status: null,
};

const {
  actions,
  reducer,
} = createSlice({
  name: 'webSocket',
  initialState,
  reducers: {
    connectWebSocket(state, action) {
      const { url } = action.payload;
      return {
        ...state,
        url,
        status: CONNECTING,
      };
    },
    connected(state) {
      return {
        ...state,
        status: OPEN,
      };
    },
    disconnect(state) {
      return {
        ...state,
        status: CLOSE,
      };
    },
    disconnected() {
      return {
        url: null,
        status: null,
      };
    },
    sendMessage(state) {
      return state;
    },
    sentMessage(state) {
      return state;
    },
    receiveMessage(state) {
      return state;
    },
  },
});

export const {
  connectWebSocket,
  connected,
  disconnect,
  disconnected,
  sendMessage,
  sentMessage,
  receiveMessage,
} = actions;

export default reducer;
