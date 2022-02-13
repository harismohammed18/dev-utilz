import { throwErrorIfNotString } from "./throwErrorIfNotString";

/**
 * function check string start with given string
 * @param {string} str - string value
 * @param {string} start  - string starting character
 * @returns {boolean} return true if string starts with start, false if not
 */
export const startWith = (str: string, start: string): boolean => {
  throwErrorIfNotString(str);
  return str.startsWith(start);
};
