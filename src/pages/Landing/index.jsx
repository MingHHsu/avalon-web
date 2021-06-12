import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import {
  LandingRoot,
  LinkButton,
  UsernameInput,
} from './styled';

export default function Landing() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const handleLink = () => dispatch(push('/lobby'));
  return (
    <LandingRoot>
      <UsernameInput value={username} onChange={(e) => setUsername(e.target.value)} />
      <LinkButton onClick={handleLink}>進入大廳</LinkButton>
    </LandingRoot>
  );
}
