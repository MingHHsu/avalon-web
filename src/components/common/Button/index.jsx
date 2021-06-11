/* eslint-disable import/prefer-default-export */
import React from 'react';
import propTypes from 'prop-types';
import * as pt from 'lib/propTypes';
import StyledButton from './styled';

function Button({
  children,
  onClick,
}) {
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: pt.children.isRequired,
  onClick: propTypes.func.isRequired,
};

export {
  Button,
};
