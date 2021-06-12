import React from 'react';
import { useSelector } from 'react-redux';
import {
  CreateRoom,
  Room,
} from './components';
import {
  LobbyRoot,
  RoomList,
} from './styled';

export default function Lobby() {
  const rooms = useSelector((state) => state.rooms);
  return (
    <LobbyRoot>
      <RoomList>
        {rooms.map(({
          id,
          name,
          number,
          currentPlayers,
        }) => (
          <Room
            key={id}
            name={name}
            number={number}
            currentPlayers={currentPlayers}
          />
        ))}
      </RoomList>
      <CreateRoom />
    </LobbyRoot>
  );
}
