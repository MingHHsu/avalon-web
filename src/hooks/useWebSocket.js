import { useEffect } from 'react';
import {
  connectWebSocket,
  disconnect,
} from 'store/slices/webSocket';

export default function useWebSocket(dispatch, path, config) {
  useEffect(() => {
    const host = process.env.REACT_APP_WEBSOCKET_HOST;
    dispatch(connectWebSocket({
      url: path ? host + path : host,
      ...config,
    }));
    return () => dispatch(disconnect());
  }, []);
}
