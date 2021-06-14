import React from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import useWebSocket from 'hooks/useWebSocket';
import {
  sendMessage,
} from 'store/slices/webSocket';
import * as pt from 'lib/propTypes';

export default function LobbyRoute({
  path,
  exact,
  component: Component,
}) {
  const dispatch = useDispatch();
  useWebSocket(dispatch, '/lobby', {
    onOpen: () => dispatch(sendMessage({
      type: 'ENTER_LOBBY',
      payload: { name: 'lazyboy' },
    })),
  });

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
