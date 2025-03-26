const stringCalculator = require('./stringCalculator');

test("stringCalculator returns empty string", () => {
  expect(stringCalculator()).toBe("");
});
