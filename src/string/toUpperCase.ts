import { isNotEmpty } from "./isNotEmpty";
import { throwErrorIfNotString } from "./throwErrorIfNotString";

/**
 * upper case the entire string
 * @param {string} str
 * @returns {string} return upper case string
 * 
 * @example
 * toUpperCase("hello world"); // "HELLO WORLD"
 * toUpperCase(""); // ""
 * toUpperCase(123); // Error: not a string
 */
export const toUpperCase = (str: string): string => {
  throwErrorIfNotString(str);
  return isNotEmpty(str) === true ? str.toUpperCase() : "";
};
