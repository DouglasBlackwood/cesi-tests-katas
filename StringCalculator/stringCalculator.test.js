const stringCalculator = require('./stringCalculator');

test("stringCalculator empty string returns 0 ", () => {
  expect(stringCalculator("")).toBe(0);
});

test("stringCalculator 2 returns 2 ", () => {
  expect(stringCalculator("2")).toBe(2);
});

test("stringCalculator 1,1 returns 2 ", () => {
  expect(stringCalculator("1,1")).toBe(2);
});

test("stringCalculator 1\n2,3 returns 6", () => {
  expect(stringCalculator("1\n2,3")).toBe(6);
});

test("stringCalculator //:\n1:2:3 returns 6", () => {
  expect(stringCalculator("//:\n1:2:3")).toBe(6);
});

test("stringCalculator -1,2,3 returns Exception", () => {
  expect(() => stringCalculator("-1,2,3")).toThrow(Error);
});