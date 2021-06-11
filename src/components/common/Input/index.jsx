/* eslint-disable import/prefer-default-export */
import React from 'react';
import propTypes from 'prop-types';
import StyledInput from './styled';

function Input({
  type,
  value,
  onChange,
}) {
  return (
    <StyledInput
      type={type}
      value={value}
      onChange={onChange}
    />
  );
}

Input.propTypes = {
  type: propTypes.oneOf([
    'button',
    'checkbox',
    'date',
    'email',
    'file',
    'image',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'text',
    'url',
  ]),
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

Input.defaultProps = {
  type: 'text',
};

export {
  Input,
};
