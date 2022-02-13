import { returnValidString } from "./returnValidString";

/**
 * *check whether string is empty.
 * if it's not string return false.
 * if it's string, check whether it's empty or not.
 * if doTrim is true, trim the string before check.
 * @param {unknown} str - unknown value
 * @param {boolean} [doTrim=false] - if doTrim  then trim the string before check else not
 * @returns {boolean}  false if string is empty, true if not
 */
export const isNotEmpty = (str: unknown, doTrim = false): boolean => {
  return doTrim === true
    ? returnValidString(str).trim().length > 0
    : returnValidString(str).length > 0;
};
