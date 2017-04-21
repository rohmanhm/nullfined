import isObject from 'lodash.isobject';
import isArray from 'lodash.isarray';
import parseObject from './parseObject';
import nullToUndefined from './nullToUndefined';

/**
 * Deeply convert null from any type of value from array to undefined
 * @param {Array} array data array value to convert
 */
const parseArray = array => array.map((v) => {
  if (isArray(v)) {
    return parseArray(v);
  } else if (isObject(v)) {
    return parseObject(v);
  }

  return nullToUndefined(v);
});

export default parseArray;
