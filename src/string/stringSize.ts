import { asciiSize } from "./asciiSize";
import { hasUnicode } from "./hasUnicode";
import { unicodeSize } from "./unicodeSize";

/**
 * Gets the number of symbols in `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the string size.
 */
export const stringSize = (string: string): number => {
  return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
};
