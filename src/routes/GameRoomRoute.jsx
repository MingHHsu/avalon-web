import React from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import useWebSocket from 'hooks/useWebSocket';
import { sendMessage } from 'store/slices/webSocket';
import * as pt from 'lib/propTypes';

export default function GameRoomRoute({
  path,
  exact,
  component: Component,
  computedMatch,
}) {
  if (computedMatch.params.id) {
    const dispatch = useDispatch();
    const { id } = computedMatch.params;
    useWebSocket(dispatch, '/room', {
      onOpen: () => dispatch(sendMessage({
        type: 'ENTER_ROOM',
        payload: { id },
      })),
    });
    const RenderComponent = () => <Component />;
    return <Route exact={exact} path={path} render={RenderComponent} />;
  }
  return <Redirect to="/lobby" />;
}

GameRoomRoute.propTypes = {
  exact: propTypes.bool,
  path: propTypes.oneOf(['/room/:id']).isRequired,
  component: pt.component.isRequired,
  computedMatch: pt.computedMatch,
};

GameRoomRoute.defaultProps = {
  exact: false,
  computedMatch: {},
};
