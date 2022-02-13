import { throwErrorIfNotString } from "./throwErrorIfNotString";

/**
 * function to check string end with given string
 * @param {string} str - string value
 * @param {string} end - string ending character
 * @returns {boolean} return true if string ends with end, false if not
 */
export const endWith = (str: string, end: string): boolean => {
  throwErrorIfNotString(str);
  return str.endsWith(end);
};
