import React from 'react';
import { useSelector } from 'react-redux';

export default function GameRoom() {
  const room = useSelector((state) => state.room.current);
  return (
    <div>
      Game Room
      {room?.players.length > 0 && room.players.map((player) => (
        <div>{player.name}</div>
      ))}
    </div>
  );
}
