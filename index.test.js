const { sum } = require('./index');
const { test } = require('tap');

test('Adding of two numbers', ({ equal, end }) => {
  equal(sum(3, 2), 5, 'Adding 3 and 2 equal to 5');
  equal(sum(27, 15), 42, 'Adding 27 and 15 equal to 42');
  equal(sum(124, 38), 162, 'Adding 124 and 38 equal to 162');
  end();
});
