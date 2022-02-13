import { isString } from "./isString";

/**
 * throw error if value is not string
 * @param{string} str - string value
 */
export const throwErrorIfNotString = (str: unknown): void => {
  if (!isString(str)) {
    throw new Error("Given value is not a string");
  }
};
