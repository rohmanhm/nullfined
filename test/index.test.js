import test from 'ava';
import nullfined from '../';

test('should exists', (t) => {
  if (nullfined) {
    t.pass();
  }
});

test('should return undefined from a value', (t) => {
  const actual = nullfined(null);
  t.is(actual, undefined);
});

test('should return contain undefined from array value', (t) => {
  const actual = nullfined([1, 2, null, 4]);
  t.deepEqual(actual, [1, 2, undefined, 4]);
});

test('should return contain undefined from object value', (t) => {
  const actual = nullfined({ a: 1, b: null });
  t.deepEqual(actual, { a: 1, b: undefined });
});
