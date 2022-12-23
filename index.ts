import * as assert from 'assert';

function flat(array: any[]): any[] {
  return [];
}

const input = [1, [2, [3]], 4];
const result = flat(input);

assert.deepEqual(result, [1, 2, 3, 4]);
