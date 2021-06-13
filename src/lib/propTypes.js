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

export const computedMatch = propTypes.shape({
  isExact: propTypes.bool,
  params: propTypes.shape({}),
  path: propTypes.string,
  url: propTypes.string,
});

export const location = propTypes.shape({
  hash: propTypes.string,
  key: propTypes.string,
  pathname: propTypes.string,
  search: propTypes.string,
});
