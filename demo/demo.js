import parse from 'postcss-value-parser';

process = function(css) {
  return parse(css);
};
