import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  sendMessage,
} from 'store/slices/webSocket';
import {
  CreateRoomRoot,
  CreateRoomButton,
  RoomNameInput,
} from './styled';

export default function CreateRoom() {
  const dispatch = useDispatch();
  const [roomName, setRoomName] = useState('阿瓦隆遊戲房');
  const handleSetRoomName = (event) => setRoomName(event.target.value);
  const handleCreateRoom = () => dispatch(sendMessage({
    type: 'CREATE_ROOM',
    payload: { setting: { name: roomName } },
  }));
  return (
    <CreateRoomRoot>
      <RoomNameInput value={roomName} onChange={handleSetRoomName} placeholder="房間名稱" />
      <CreateRoomButton onClick={handleCreateRoom}>創建房間</CreateRoomButton>
    </CreateRoomRoot>
  );
}
