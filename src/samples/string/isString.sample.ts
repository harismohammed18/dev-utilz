import { strHelper } from "../../index";

console.log(strHelper.isString("string")); // true
console.log(strHelper.isString(1)); // false
console.log(strHelper.isString("")); // true
console.log(strHelper.isString(null)); // false
console.log(strHelper.isString(undefined)); // false
