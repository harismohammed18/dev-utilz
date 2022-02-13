import { throwErrorIfNotString } from "./throwErrorIfNotString";

/**
 * function to get the first n letters of a string
 * @param {String} str
 * @param {Number} n
 * @returns {string} return first n letters of string
 */
export const getFirstLetters = (str: string, n: number): string => {
  throwErrorIfNotString(str);
  return str.substring(0, n);
};
