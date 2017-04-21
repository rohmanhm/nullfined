import isObject from 'lodash.isobject';
import isArray from 'lodash.isarray';
import parseArray from './parseArray';
import nullToUndefined from './nullToUndefined';

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

      if (isArray(value)) {
        newObject[k] = parseArray(value);
      } else if (isObject(value)) {
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

export default parseObject;
