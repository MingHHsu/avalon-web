import { useEffect } from 'react';
import {
  connectWebSocket,
  disconnect,
} from 'store/slices/webSocket';

export default function useWebSocket(dispatch, config) {
  useEffect(() => {
    dispatch(connectWebSocket(config));
    return () => dispatch(disconnect());
  }, []);
}
