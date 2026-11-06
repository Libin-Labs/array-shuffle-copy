import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('returns same contents', () => {
  assert.deepEqual([...api.shuffled([1, 2, 3], () => 0)].sort(), [1, 2, 3]);
});
test('uses deterministic random', () => {
  assert.deepEqual(
    api.shuffled([1, 2, 3], () => 0),
    [2, 3, 1],
  );
});
test('handles empty array', () => {
  assert.deepEqual(
    api.shuffled([], () => 0),
    [],
  );
});
test('handles singleton', () => {
  assert.deepEqual(
    api.shuffled([1], () => 0),
    [1],
  );
});
test('does not mutate source', () => {
  const x = [1, 2, 3];
  api.shuffled(x, () => 0);
  assert.deepEqual(x, [1, 2, 3]);
});
test('rejects out-of-range random', () => {
  assert.throws(() => api.shuffled([1, 2], () => 1), RangeError);
});
