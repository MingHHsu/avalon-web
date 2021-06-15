import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';

export default function NotFound() {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.errorHandler.notFound);
  return (
    <div>
      {message}
      <button type="button" onClick={() => dispatch(push('/lobby'))}>回大廳</button>
    </div>
  );
}
