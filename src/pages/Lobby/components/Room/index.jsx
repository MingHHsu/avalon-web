import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import propTypes from 'prop-types';
import { equals } from 'ramda';
import {
  RoomRoot,
  RoomName,
  RoomNumber,
  RoomPlayers,
} from './styled';

function Room({
  id,
  name,
  number,
  players,
}) {
  const dispatch = useDispatch();
  const handleEnterRoom = () => dispatch(push(`/room/${id}`));
  return (
    <RoomRoot onClick={handleEnterRoom}>
      <RoomName>
        房名：
        {name}
      </RoomName>
      <RoomNumber>
        房號：
        {number}
      </RoomNumber>
      <RoomPlayers>
        玩家數：
        {players}
      </RoomPlayers>
    </RoomRoot>
  );
}

Room.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  number: propTypes.number.isRequired,
  players: propTypes.number.isRequired,
};

export default memo(Room, (prev, next) => equals(prev, next));
