import { isString } from "./isString";

/**
 * if value is string return value else return empty string
 * @param {unknown} str - unknown value
 * @returns {string} string value
 */
export const returnValidString = (str: unknown): string => {
  return isString(str) ? String(str).toString() : "";
};
