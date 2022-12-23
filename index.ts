import * as assert from 'assert';

function deepFlat(array: any[]): any[] {
  return array.reduce((all, curr)=> ([
    ...all,
    ...(Array.isArray(curr) ? deepFlat(curr) : [curr]),
  ]), []);
}

const input = [1, [2, [3]], 4];
const result = deepFlat(input);

assert.deepEqual(result, [1, 2, 3, 4]);
