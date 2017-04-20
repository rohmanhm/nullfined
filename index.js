const isObject = require('lodash.isobject');
const isArray = require('lodash.isarray');

/**
 * Convert null value to undefined.
 * @param {Any} value data value.
 */
const nullToUndefined = (value) => {
  if (value === null) return undefined;
  return value;
};

/**
 * Recursively change object null value.
 * @param {Object} object data object value to convert.
 */
const parseObject = (object) => {
  /**
   * Recursive function that change object deeply.
   * @param {Object} child data object child value to convert.
   */
  const recursive = (child) => {
    const newObject = {};

    Object.keys(child).map((k) => {
      const value = child[k];

      if (isObject(value)) {
        newObject[k] = recursive(value);
      } else {
        newObject[k] = nullToUndefined(value);
      }

      return true;
    });

    return newObject;
  };

  return recursive(object);
};

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

module.exports = (data) => {
  if (isArray(data)) return parseArray(data);
  if (isObject(data)) return parseObject(data);

  return nullToUndefined(data);
};

exports = {
  parseObject,
  parseArray,
  nullToUndefined,
};
