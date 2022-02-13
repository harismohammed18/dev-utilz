import { isNotEmpty } from "./isNotEmpty";
import { throwErrorIfNotString } from "./throwErrorIfNotString";

/**
 * lowercase the entire string
 * @param {string} str - string value
 * @returns {string} return lowercase string
 * 
 * @example
 * toLowerCase("HELLO WORLD"); // "hello world"
 * toLowerCase(""); // ""
 * toLowerCase(123); // Error: not a string
 */
export const toLowerCase = (str: string): string => {
  throwErrorIfNotString(str);
  return isNotEmpty(str) === true ? str.toLowerCase() : "";
};
