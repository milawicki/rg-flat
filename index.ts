import * as assert from 'assert';

type ExtractUniqueTypes<T> = T extends (infer R)[] ? ExtractUniqueTypes<R>: T;

function deepFlat<TParam extends any[]>(array: TParam): ExtractUniqueTypes<TParam>[] {
  return array.reduce((all, current) => ([
    ...all,
    ...(Array.isArray(current) ? deepFlat(current) : [current]),
  ]), []);
}

const input = [1, [2, [3]], 4];
const result = deepFlat(input);

assert.deepEqual(result, [1, 2, 3, 4]);
