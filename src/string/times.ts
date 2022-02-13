import { constants } from "../constant";

/**
 * function to repeat string
 * @param {string} string - string value
 * @param {number} n - number of times to repeat
 * @returns {array} return array of string
 * 
 * @example
 * repeatString("hello", 3); // ["hello", "hello", "hello"]
 * repeatString("hello", 0); // []
 */
export const times = (string: string, n: number) => {
  if (n < 1 || n > constants.MAX_SAFE_INTEGER) {
    return [];
  }
  let index = -1;
  const length = Math.min(n, constants.MAX_ARRAY_LENGTH);
  const result = new Array(length);
  while (++index < length) {
    result[index] = string;
  }
  return result;
};
