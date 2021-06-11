import React, { useState } from 'react';
import {
  LandingRoot,
  LinkToLobby,
  LinkButton,
  UsernameInput,
} from './styled';

export default function Landing() {
  const [username, setUsername] = useState('');
  return (
    <LandingRoot>
      <UsernameInput value={username} onChange={(e) => setUsername(e.target.value)} />
      <LinkButton onClick={() => {}}>
        <LinkToLobby to="/lobby">進入大廳</LinkToLobby>
      </LinkButton>
    </LandingRoot>
  );
}
