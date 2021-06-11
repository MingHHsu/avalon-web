import propTypes from 'prop-types';

export const children = propTypes.oneOfType([
  propTypes.string,
  propTypes.node,
  propTypes.object,
  propTypes.func,
  propTypes.array,
]);

export const component = propTypes.oneOfType([
  propTypes.string,
  propTypes.node,
  propTypes.object,
  propTypes.func,
  propTypes.array,
]);
