import { throwErrorIfNotString } from "./throwErrorIfNotString";

/**
 * function to get substring
 * @param {string} str - string value
 * @param {number} [start=0] - start index
 * @param {number} [end=0] - end index
 * @returns {string} return substring
 *
 * @example
 * getSubString("hello world", 0, 3); // "hel"
 * getSubString("hello world", 0, 0); // ""
 * getSubString("hello world", -1, 3); // "hel"
 */
export const getSubString = (str: string, start = 0, end = 0): string => {
  throwErrorIfNotString(str);
  return str.substring(start, end);
};
