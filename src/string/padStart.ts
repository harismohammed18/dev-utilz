import { isNotEmpty } from "./isNotEmpty";
import { throwErrorIfNotString } from "./throwErrorIfNotString";

/**
 * Pads `string` on the left and right sides if it's shorter than `length`.
 * Padding characters are truncated if they can't be evenly divided by `length`.
 * @param {string} [string=''] The string to pad.
 * @param {number} [length=0] The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the padded string.
 */
export const padStart = (
  str: string,
  targetLength: number,
  padString = " "
): string => {
  throwErrorIfNotString(str);
  throwErrorIfNotString(padString);

  if (isNotEmpty(str) && targetLength >= 0) {
    return padString
      ? str.padStart(targetLength, padString)
      : str.padStart(targetLength);
  }
  return str;
};
