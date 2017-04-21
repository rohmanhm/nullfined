/**
 * Convert null value to undefined.
 * @param {Any} value data value.
 */
const nullToUndefined = (value) => {
  if (value === null) return undefined;
  return value;
};

export default nullToUndefined;
