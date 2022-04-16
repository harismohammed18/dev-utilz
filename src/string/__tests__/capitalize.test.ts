import * as stringFunctions from "../index";

test("test capitalize", () => {
  expect(stringFunctions.capitalize("john")).toBe("John");
  expect(stringFunctions.capitalize("")).toBe("");
  expect(stringFunctions.capitalize("john snow")).toBe("John snow");
  expect(stringFunctions.capitalize("MICKEY")).toBe("Mickey");
});

test("test capitalizeAll", () => {
  expect(stringFunctions.capitalizeAll("john")).toBe("John");
  expect(stringFunctions.capitalizeAll("")).toBe("");
  expect(stringFunctions.capitalizeAll("john snow")).toBe("John Snow");
  expect(stringFunctions.capitalizeAll("MICKEY")).toBe("Mickey");
  expect(stringFunctions.capitalizeAll("MICKEY TEST")).toBe("Mickey Test");
});

test("test toLowercase", () => {
  expect(stringFunctions.toLowerCase("john")).toBe("john");
  expect(stringFunctions.toLowerCase("")).toBe("");
  expect(stringFunctions.toLowerCase("john snow")).toBe("john snow");
  expect(stringFunctions.toLowerCase("MICKEY")).toBe("mickey");
  expect(stringFunctions.toLowerCase("MICKEY TEST")).toBe("mickey test");
});

test("test toUpperCase", () => {
  expect(stringFunctions.toUpperCase("john")).toBe("JOHN");
  expect(stringFunctions.toUpperCase("")).toBe("");
  expect(stringFunctions.toUpperCase("john snow")).toBe("JOHN SNOW");
  expect(stringFunctions.toUpperCase("MICKEY")).toBe("MICKEY");
  expect(stringFunctions.toUpperCase("MICKEY TEST")).toBe("MICKEY TEST");
});
