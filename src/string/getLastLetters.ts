import { throwErrorIfNotString } from "./throwErrorIfNotString";

/**
 * function to get last n letters of a string
 * @param {string} str - string value
 * @param {number} n - number of letters
 * @returns {string} return last n letters of string
 */
export const getLastLetters = (str: string, n: number): string => {
  throwErrorIfNotString(str);
  return str.substring(str.length - n);
};
