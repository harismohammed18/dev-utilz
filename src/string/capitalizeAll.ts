import { capitalize } from "./capitalize";
import { isNotEmpty } from "./isNotEmpty";
import { throwErrorIfNotString } from "./throwErrorIfNotString";

/**
 * capitalize first letter of each word in string
 * @param {string} str - string value
 * @returns {string} return string with first letter capitalized
 * 
 * @example
 * capitalizeAll("hello world"); // "Hello World"
 * capitalizeAll(""); // ""
 * capitalizeAll(123); // Error: not a string
 */
export const capitalizeAll = (str: string): string => {
  throwErrorIfNotString(str);
  return isNotEmpty(str) === true
    ? str.toLowerCase().split(" ").map(capitalize).join(" ")
    : "";
};
