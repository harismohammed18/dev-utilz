import { isNotEmpty } from "./isNotEmpty";
import { throwErrorIfNotString } from "./throwErrorIfNotString";

/**
 * upper case the entire string
 * @param {string} str
 * @returns {string} return upper case string
 */
export const toUpperCase = (str: string): string => {
  throwErrorIfNotString(str);
  return isNotEmpty(str) === true ? str.toUpperCase() : "";
};
