import { isNotEmpty } from "./isNotEmpty";
import { throwErrorIfNotString } from "./throwErrorIfNotString";

/**
 * capitalize first letter of string
 * if not a string throw error
 * @param {string} str - string value
 * @returns {string} return capitalized string
 * 
 * @example
 * capitalize("hello world"); // "Hello world"
 * capitalize(""); // ""
 * capitalize(123); // Error: not a string
 */
export const capitalize = (str: string): string => {
  throwErrorIfNotString(str);
  return isNotEmpty(str) === true
    ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    : "";
};
