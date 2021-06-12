import React from 'react';
import propTypes from 'prop-types';
import {
  RoomRoot,
  RoomName,
  RoomNumber,
  RoomCurrentPlayers,
} from './styled';

export default function Room({
  name,
  number,
  currentPlayers,
}) {
  return (
    <RoomRoot>
      <RoomName>
        房名：
        {name}
      </RoomName>
      <RoomNumber>
        房號：
        {number}
      </RoomNumber>
      <RoomCurrentPlayers>
        玩家數：
        {currentPlayers}
      </RoomCurrentPlayers>
    </RoomRoot>
  );
}

Room.propTypes = {
  name: propTypes.string.isRequired,
  number: propTypes.number.isRequired,
  currentPlayers: propTypes.number.isRequired,
};
