import { throwErrorIfNotString } from "./throwErrorIfNotString";

/**
 * function to get the first n letters of a string
 * @param {string} str
 * @param {number} n
 * @returns {string} return first n letters of string
 * 
 * @example
 * getFirstLetters("hello world", 3); // "hel"
 * getFirstLetters("hello world", 0); // ""
 * getFirstLetters("hello world", -1); // ""
 */
export const getFirstLetters = (str: string, n: number): string => {
  throwErrorIfNotString(str);
  return str.substring(0, n);
};
