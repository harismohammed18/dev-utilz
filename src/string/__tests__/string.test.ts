import * as stringFunctions from "../index";

test("Test isString: type check", () => {
  expect(stringFunctions.isString("John")).toBeTruthy();
  expect(stringFunctions.isString("John")).toBeTruthy();
  expect(stringFunctions.isString(`John`)).toBeTruthy();
  expect(stringFunctions.isString(1)).toBeFalsy();
  expect(stringFunctions.isString(0)).toBeFalsy();
  expect(stringFunctions.isString(true)).toBeFalsy();
  expect(stringFunctions.isString(false)).toBeFalsy();
  expect(stringFunctions.isString(null)).toBeFalsy();
  expect(stringFunctions.isString(undefined)).toBeFalsy();
});

test("Test isString: String class", () => {
  const string = new String("Test1");
  expect(stringFunctions.isString(string)).toBeTruthy();
});

test("Test isNotEmpty: without trim", () => {
  expect(stringFunctions.isNotEmpty("", false)).toBeFalsy();
  expect(stringFunctions.isNotEmpty("John", false)).toBeTruthy();
  expect(stringFunctions.isNotEmpty(123, false)).toBeFalsy();
  expect(stringFunctions.isNotEmpty(`John`, false)).toBeTruthy();
  expect(stringFunctions.isNotEmpty(1, false)).toBeFalsy();
  expect(stringFunctions.isNotEmpty(null, false)).toBeFalsy();
  expect(stringFunctions.isNotEmpty(undefined, false)).toBeFalsy();
  expect(stringFunctions.isNotEmpty(" ", false)).toBeTruthy();
});

test("Test isNotEmpty: with trim", () => {
  expect(stringFunctions.isNotEmpty("", true)).toBeFalsy();
  expect(stringFunctions.isNotEmpty("  ", true)).toBeFalsy();
});

test("Test returnValidString", () => {
  expect(stringFunctions.returnValidString("John")).toBe("John");
  expect(stringFunctions.returnValidString("")).toBe("");
  expect(stringFunctions.returnValidString(123)).toBe("");
  expect(stringFunctions.returnValidString(1)).toBe("");
  expect(stringFunctions.returnValidString(null)).toBe("");
  expect(stringFunctions.returnValidString(undefined)).toBe("");
});

test("Test throwErrorIfNotString", () => {
  expect(stringFunctions.throwErrorIfNotString("John")).toBeUndefined();
  expect(() => stringFunctions.throwErrorIfNotString(123)).toThrowError(
    "Given value is not a string"
  );
  expect(() => stringFunctions.throwErrorIfNotString(null)).toThrowError(
    "Given value is not a string"
  );
  expect(() => stringFunctions.throwErrorIfNotString(undefined)).toThrowError(
    "Given value is not a string"
  );
});

test("Test getFirstLetter", () => {
  expect(stringFunctions.getFirstLetters("John", 10)).toBe("John");
  expect(stringFunctions.getFirstLetters("John", 1)).toBe("J");
  expect(stringFunctions.getFirstLetters("John Thomas", 6)).toBe("John T");
});

test("Test getSubString", () => {
  expect(stringFunctions.getSubString("John", 1, 3)).toBe("oh");
  expect(stringFunctions.getSubString("John", 1, 0)).toBe("J");
  expect(stringFunctions.getSubString("John", -1, 3)).toBe("Joh");
});

test("Test asciiSize", () => {
  expect(stringFunctions.asciiSize("John")).toBe(4);
  expect(stringFunctions.asciiSize("")).toBe(0);
  expect(stringFunctions.asciiSize("John Thomas")).toBe(11);
});

test("Test Pad start", () => {
  expect(stringFunctions.padStart("John", 10, "0")).toBe("000000John");
  expect(stringFunctions.padStart("John", 10, "_")).toBe("______John");
  expect(stringFunctions.padStart("John", 10)).toBe("      John");
  expect(stringFunctions.padStart("John", 3)).toBe("John");
  expect(stringFunctions.padStart("", 0)).toBe("");
});

test("Test endWith", () => {
  expect(stringFunctions.endWith("John", "n")).toBeTruthy();
  expect(stringFunctions.endWith("John", "N")).toBeFalsy();
  expect(stringFunctions.endWith("John", "")).toBeTruthy();
  expect(stringFunctions.endWith("John", "John")).toBeTruthy();
  expect(stringFunctions.endWith("John", "John Thomas")).toBeFalsy();
});

test("Test getLastLetters", () => {
  expect(stringFunctions.getLastLetters("John", 10)).toBe("John");
  expect(stringFunctions.getLastLetters("John", 1)).toBe("n");
  expect(stringFunctions.getLastLetters("John Thomas", 6)).toBe("Thomas");
  expect(stringFunctions.getLastLetters("John Thomas", 0)).toBe("");
  expect(stringFunctions.getLastLetters("John Thomas", -1)).toBe("");
});

test("Test hasUnicode", () => {
  expect(stringFunctions.hasUnicode("John")).toBeFalsy();
  expect(stringFunctions.hasUnicode("John Thomas")).toBeFalsy();
  expect(stringFunctions.hasUnicode("\uD83D\uDC04")).toBeTruthy();
});

test("Test startWith", () => {
  expect(stringFunctions.startWith("John", "J")).toBeTruthy();
  expect(stringFunctions.startWith("John", "j")).toBeFalsy();
  expect(stringFunctions.startWith("John", "")).toBeTruthy();
  expect(stringFunctions.startWith("John", "John")).toBeTruthy();
  expect(stringFunctions.startWith("John", "John Thomas")).toBeFalsy();
});

test("Test stringSize", () => {
  expect(stringFunctions.stringSize("John")).toBe(4);
  expect(stringFunctions.stringSize("")).toBe(0);
  expect(stringFunctions.stringSize("John Thomas")).toBe(11);
  expect(stringFunctions.stringSize("John Thomas\uD83D\uDC04")).toBe(12);
});

test("Test times", () => {
  expect(stringFunctions.times("John", 3)).toStrictEqual([
    "John",
    "John",
    "John",
  ]);
  expect(stringFunctions.times("John", 0)).toStrictEqual([]);
  expect(stringFunctions.times("John", -1)).toStrictEqual([]);
  expect(stringFunctions.times("John", 1)).toStrictEqual(["John"]);
});
