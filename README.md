# dev-utilz

Utility functions to speedup development

## Table of contents

- [install](#install)
- [String utilities](#string-utilities)

  - [capitalize](#capitalize)
  - [capitalizeAll](#capitalizeAll)
  - [endWith](#endWith)
  - [isString](#isString)
  - [isNotEmpty](#isNotEmpty)
  - [returnValidString](#returnValidString)
  - [throwErrorIfNotString](#throwErrorIfNotString)
  - [toLowerCase](#toLowerCase)
  - [toUpperCase](#toUpperCase)
  - [getFirstLetters](#getFirstLetters)
  - [getSubString](#getSubString)
  - [getLastLetters](#getLastLetters)
  - [startWith](#startWith)
  - [times](#times)
  - pad #TODO
  - padStart  #TODO
  - padEnd  #TODO
  - getLength  #TODO
- Number  #TODO

## Install

Install with [npm](https://www.npmjs.com/):

```javascript
$ npm install --save dev-utilz
```

## String utilities
This library will support following string utility functions
### isString
Check whether the given value is string or not. if valid string return tru else false.
#### usage
```javascript
import { strHelper } from "dev-utilz";

console.log(strHelper.isString("string")); // true
console.log(strHelper.isString(1)); // false
```

### isNotEmpty
Check whether the string is empty or not. 
 * If  empty return false else not.
 * If it's string, check whether it's empty or not else return false
 * If doTrim is true, trim the string before check. default value is false.
 ```javascript
import { strHelper } from "dev-utilz";

console.log(strHelper.isNotEmpty("string")); // true
console.log(strHelper.isNotEmpty(1)); // false
console.log(strHelper.isNotEmpty("")); // false
console.log(strHelper.isNotEmpty(" ")); // true
console.log(strHelper.isNotEmpty(" ", true)); // false

 ```

### returnValidString
If value is string return value else return empty string.
```javascript
import { strHelper } from "dev-utilz";

console.log(strHelper.returnValidString("string")); // "string"
console.log(strHelper.returnValidString(1)); // ""
```

### capitalize
Capitalize the string
```javascript
import { strHelper } from "dev-utilz";

console.log(strHelper.capitalize("string")); // String
console.log(strHelper.capitalize("test String")); // Test string
```

### capitalizeAll
Capitalize each word in string
```javascript
import { strHelper } from "dev-utilz";

console.log(strHelper.capitalizeAll("string")); // String
console.log(strHelper.capitalizeAll("test string")); // Test String
```

### throwErrorIfNotString
Throw error if value is not a string else return string
```javascript
import { strHelper } from "dev-utilz";

console.log(strHelper.throwErrorIfNotString("string")); // string
console.log(strHelper.throwErrorIfNotString("")); // ""
console.log(strHelper.throwErrorIfNotString(1)); // throw error
```

### toLowerCase
Convert entire string to lowercase
```javascript
import { strHelper } from "dev-utilz";

console.log(strHelper.toLowerCase("string")); // string
console.log(strHelper.toLowerCase("TEST String")); // test string
```

### toUpperCase
Convert entire string to uppercase
```javascript
import { strHelper } from "dev-utilz";

console.log(strHelper.toUpperCase("string")); // STRING
console.log(strHelper.toUpperCase("TEST String")); // TEST STRING
```
### getFirstLetters
Function to get the first n letters of a string
```javascript
import { strHelper } from "dev-utilz";

console.log(strHelper.getFirstLetters("string",2)); // st
```

### getSubString
Function to get substring from given string
```javascript
import { strHelper } from "dev-utilz";
console.log(stringFunctions.getSubString("John", 1, 3)) // oh
```
### getLastLetters
Function to get the last n letters of a string
```javascript
import { strHelper } from "dev-utilz";

console.log(strHelper.getLastLetters("string",2)); // ng
```

### startWith
Check whether the string is start with given string
```javascript
import { strHelper } from "dev-utilz";
console.log(strHelper.startWith("string","str")); // true
console.log(strHelper.startWith("TEST String","John")); // false
```
### endWith
Check whether the string is end with given string
```javascript
import { strHelper } from "dev-utilz";
console.log(strHelper.endWith("string","ing")); // true
console.log(strHelper.endWith("TEST String","John")); // false
```

### times
Function to repeat string n times and return array
```javascript
console.log(strHelper.times("string",2)); // ["string","string"]
```
