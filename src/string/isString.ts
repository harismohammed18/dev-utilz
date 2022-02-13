/**
 * check whether the value is string
 * @param {unknown} str - unknown value
 * @returns {boolean} true if value is string, false if not
 */
export const isString = (str: unknown): boolean => {
  return (
    typeof str === "string" ||
    str instanceof String ||
    Object.prototype.toString.call(str) === "[object String]"
  );
};
