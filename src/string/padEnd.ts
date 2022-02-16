import { isNotEmpty } from "./isNotEmpty";
import { throwErrorIfNotString } from "./throwErrorIfNotString";

/**
 * Pads `string` on the left and right sides if it's shorter than `length`.
 * Padding characters are truncated if they can't be evenly divided by `length`.
 * @param {string} str The string to pad.
 * @param {number} targetLength The padding length.
 * @param {string} [padString=" "] The string used as padding.
 * @returns {string} Returns the padded string.
 */
export const padEnd = (
  str: string,
  targetLength: number,
  padString = " "
): string => {
  throwErrorIfNotString(str);
  throwErrorIfNotString(padString);

  if (isNotEmpty(str) && targetLength >= 0) {
    return padString
      ? str.padEnd(targetLength, padString)
      : str.padEnd(targetLength);
  }
  return str;
};
