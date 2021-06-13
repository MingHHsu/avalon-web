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
  const rooms = useSelector((state) => state.room.list);
  return (
    <LobbyRoot>
      <RoomList>
        {rooms.map(({
          id,
          name,
          number,
          players,
        }) => (
          <Room
            key={id}
            id={id}
            name={name}
            number={number}
            players={players}
          />
        ))}
      </RoomList>
      <CreateRoom />
    </LobbyRoot>
  );
}
