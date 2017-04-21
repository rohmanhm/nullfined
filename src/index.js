import isObject from 'lodash.isobject';
import isArray from 'lodash.isarray';
import parseArray from './parseArray';
import parseObject from './parseObject';
import nullToUndefined from './nullToUndefined';

export default (data) => {
  if (isArray(data)) return parseArray(data);
  if (isObject(data)) return parseObject(data);

  return nullToUndefined(data);
};
