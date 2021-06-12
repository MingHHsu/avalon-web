import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import propTypes from 'prop-types';
import {
  connectWebSocket,
  disconnect,
  sendMessage,
} from 'store/slices/webSocket';
import * as pt from 'lib/propTypes';

export default function LobbyRoute({
  path,
  exact,
  component: Component,
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(connectWebSocket({
      url: 'ws://localhost:5000/lobby',
      onOpen: () => dispatch(sendMessage({
        type: 'ENTER_LOBBY',
        payload: { name: 'lazyboy' },
      })),
      onClose: () => console.log('close'),
    }));
    return () => dispatch(disconnect());
  }, []);

  const RenderComponent = () => <Component />;
  return <Route exact={exact} path={path} render={RenderComponent} />;
}

LobbyRoute.propTypes = {
  exact: propTypes.bool,
  path: propTypes.oneOf(['/lobby']).isRequired,
  component: pt.component.isRequired,
};

LobbyRoute.defaultProps = {
  exact: false,
};
