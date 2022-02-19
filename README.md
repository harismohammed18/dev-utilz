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
  - [padStart](#padStart)
  - [padEnd](#padEnd)
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
import { isString } from "dev-utilz";

console.log(isString("string")); // true
console.log(isString(1)); // false
```

### isNotEmpty
Check whether the string is empty or not. 
 * If  empty return false else not.
 * If it's string, check whether it's empty or not else return false
 * If doTrim is true, trim the string before check. default value is false.
 ```javascript
import { isNotEmpty } from "dev-utilz";

console.log(isNotEmpty("string")); // true
console.log(isNotEmpty(1)); // false
console.log(isNotEmpty("")); // false
console.log(isNotEmpty(" ")); // true
console.log(isNotEmpty(" ", true)); // false

 ```

### returnValidString
If value is string return value else return empty string.
```javascript
import { returnValidString } from "dev-utilz";

console.log(returnValidString("string")); // "string"
console.log(returnValidString(1)); // ""
```

### capitalize
Capitalize the string
```javascript
import { capitalize } from "dev-utilz";

console.log(capitalize("string")); // String
console.log(capitalize("test String")); // Test string
```

### capitalizeAll
Capitalize each word in string
```javascript
import { capitalizeAll } from "dev-utilz";

console.log(capitalizeAll("string")); // String
console.log(capitalizeAll("test string")); // Test String
```

### throwErrorIfNotString
Throw error if value is not a string else return string
```javascript
import { throwErrorIfNotString } from "dev-utilz";

console.log(throwErrorIfNotString("string")); // string
console.log(throwErrorIfNotString("")); // ""
console.log(throwErrorIfNotString(1)); // throw error
```

### toLowerCase
Convert entire string to lowercase
```javascript
import { toLowerCase } from "dev-utilz";

console.log(toLowerCase("string")); // string
console.log(toLowerCase("TEST String")); // test string
```

### toUpperCase
Convert entire string to uppercase
```javascript
import { toUpperCase } from "dev-utilz";

console.log(toUpperCase("string")); // STRING
console.log(toUpperCase("TEST String")); // TEST STRING
```
### getFirstLetters
Function to get the first n letters of a string
```javascript
import { getFirstLetters } from "dev-utilz";

console.log(getFirstLetters("string",2)); // st
```

### getSubString
Function to get substring from given string
```javascript
import { getSubString } from "dev-utilz";
console.log(getSubString("John", 1, 3)) // oh
```
### getLastLetters
Function to get the last n letters of a string
```javascript
import { getLastLetters } from "dev-utilz";

console.log(getLastLetters("string",2)); // ng
```

### startWith
Check whether the string is start with given string
```javascript
import { startWith } from "dev-utilz";
console.log(startWith("string","str")); // true
console.log(startWith("TEST String","John")); // false
```
### endWith
Check whether the string is end with given string
```javascript
import { endWith } from "dev-utilz";
console.log(endWith("string","ing")); // true
console.log(endWith("TEST String","John")); // false
```

### times
Function to repeat string n times and return array
```javascript
import { times } from "dev-utilz";
console.log(times("string",2)); // ["string","string"]
```

### padStart
Function to add `string` on the left sides
```javascript
import { padStart } from "dev-utilz";
console.log(padStart("ab", 1)); // ab
console.log(padStart("ab", 3, "x")); // xab
```

### padEnd
Function to add `string` on the right sides
```javascript
import { padEnd } from "dev-utilz";
console.log(padEnd("ab", 1)); // ab
console.log(padEnd("ab", 3, "x")); // abx
```
