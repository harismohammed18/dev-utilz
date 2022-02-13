import { isString } from "./isString";

/**
 * if value is string return value else return empty string
 * @param {unknown} str - unknown value
 * @returns {string} string value
 * 
 * @example
 * returnValidString("hello world"); // "hello world"
 * returnValidString(123); // ""
 * returnValidString(true); // ""
 * returnValidString(null); // ""
 */
export const returnValidString = (str: unknown): string => {
  return isString(str) ? String(str).toString() : "";
};
