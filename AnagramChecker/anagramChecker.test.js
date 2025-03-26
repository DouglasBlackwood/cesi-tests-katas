const anagramChecker = require('./anagramChecker');

test("anagramChecker returns empty string", () => {
  expect(anagramChecker()).toBe("");
});
