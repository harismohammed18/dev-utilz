import { throwErrorIfNotString } from "./throwErrorIfNotString";

/**
 * function to get last n letters of a string
 * @param {string} str - string value
 * @param {number} n - number of letters
 * @returns {string} return last n letters of string
 * 
 * @example
 * getLastLetters("hello world", 3); // "rld"
 * getLastLetters("hello world", 0); // ""
 * getLastLetters("hello world", -1); // ""
 */
export const getLastLetters = (str: string, n: number): string => {
  throwErrorIfNotString(str);
  return str.substring(str.length - n);
};
