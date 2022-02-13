import { throwErrorIfNotString } from "./throwErrorIfNotString";

/**
 * function to get substring
 * @param {String} str - string value
 * @param {number} start - start index
 * @param {number} end - end index
 * @returns {string} return substring
 */
export const getSubString = (str: string, start = 0, end = 0): string => {
  throwErrorIfNotString(str);
  return str.substring(start, end);
};
